/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  // cacheOnFrontendNav: true,
  // aggressiveFrontEndNavCaching: true,
  // cacheStartUrl: true,
  // disable: false,
});

const nextConfig = {};

export default withPWA(nextConfig);

// export default nextConfig;
