import React from 'react';

export default function Quote() {
  return (
    <section className="bg-site py-24 px-6 border-b border-site transition-colors duration-500">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-heading text-3xl sm:text-5xl italic text-site leading-tight mb-8">
          « L'harmonie naît de l'écoute : celle de soi, et celle du vivant. »
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-[1px] bg-[#8ba394]" />
          <span className="text-[#8ba394] font-heading italic text-xl">— Katia Burgun</span>
        </div>
      </div>
    </section>
  );
}
