import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Hls from 'hls.js';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function useHlsVideo(videoRef: React.RefObject<HTMLVideoElement | null>, src: string) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    
    // If it's a direct MP4 file, just use native playback
    if (src.toLowerCase().endsWith('.mp4')) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    let hls: Hls;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    }
    video.play().catch(() => {});
    return () => { if (hls) hls.destroy(); };
  }, [videoRef, src]);
}

export function HlsBackgroundVideo({ src, className = "", style = {} }: { src: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLVideoElement>(null);
  useHlsVideo(ref, src);
  return (
    <video ref={ref} autoPlay loop muted playsInline className={cn("absolute inset-0 h-full w-full object-cover", className)} style={style} />
  );
}

export function SectionBadge({ children, className }: { children: React.ReactNode; className?: string; }) {
  return (
    <div className={cn("liquid-glass inline-flex items-center rounded-full px-4 py-1.5 text-[10px] font-medium text-site opacity-90 uppercase tracking-widest font-body border border-site", className)}>
      <span className="relative z-10">{children}</span>
    </div>
  );
}

export function PrimaryButton({ children, className = "", href = "#contact" }: { children: React.ReactNode; className?: string; href?: string }) {
  const isExternal = href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto') || href.startsWith('https://wa.me');
  
  const baseClassName = cn("liquid-glass-strong inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#8ba394]/20", className);
  
  if (isExternal || href.startsWith('#')) {
    return (
      <a href={href} className={baseClassName} style={{ backgroundColor: "#8ba394" }}>
        {children}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link to={href} className={baseClassName} style={{ backgroundColor: "#8ba394" }}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function BlurText({ text, className = "", delay = 100, splitBy = "words", direction = "bottom" }: { text: string; className?: string; delay?: number; splitBy?: "words" | "letters"; direction?: "bottom" | "top"; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const items = useMemo(() => splitBy === "letters" ? text.split("") : text.split(" "), [text, splitBy]);
  const hiddenY = direction === "bottom" ? 40 : -40;
  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {items.map((item, index) => (
        <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: hiddenY }} animate={visible ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined} transition={{ delay: index * (delay / 1000), duration: 0.8, ease: "easeOut" }} className={cn(splitBy === "words" ? "mr-[0.25em]" : "")} style={{ display: "inline-block" }}>
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </div>
  );
}
