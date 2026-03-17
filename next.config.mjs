/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'efiuhprybyieyfbixhfw.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'cdns3.estateweb.com',
        pathname: '/**',
      },
    ],
    // Allow unoptimized images as fallback
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
