/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  //   dest: "public",
  customWorkerSrc: "service-worker",
  customWorkerDest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  // disable: false,
  reloadOnOnline: true,
  register: true,
  //   sw: "service-worker.js",
});

const nextConfig = {};

export default withPWA(nextConfig);

// export default nextConfig;
