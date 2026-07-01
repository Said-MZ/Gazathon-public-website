/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

export default nextConfig;
