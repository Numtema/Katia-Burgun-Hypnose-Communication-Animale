import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // For easier deployment of local assets on Vercel
  },
  async redirects() {
    return [
      {
        source: '/hypnose-ericksonienne-houdetot',
        destination: '/hypnose',
        permanent: true,
      },
      {
        source: '/formation-initiation-communication-animale',
        destination: '/formation',
        permanent: true,
      },
      {
        source: '/témoignages',
        destination: '/temoignages',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
