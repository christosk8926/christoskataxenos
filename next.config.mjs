/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ΑΥΤΟ ΕΛΕΙΠΕ! Χωρίς αυτό βλέπεις μόνο το Readme.
  images: {
    unoptimized: true, // Απαραίτητο για να φαίνονται οι εικόνες στο GitHub
  },
};

export default nextConfig;
