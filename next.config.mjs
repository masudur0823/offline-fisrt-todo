/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  //   cacheOnFrontendNav: true,
  //   aggressiveFrontEndNavCaching: true,
  //   cacheStartUrl: true,
  //   reloadOnOnline: true,
  //   runtimeCaching: [],
  //   sw: "service-worker.js",
  runtimeCaching: [
    {
      urlPattern: "https://test-backend-node.onrender.com/task",
      handler: "NetworkOnly", // Change this to 'NetworkOnly' to disable cache check for fetch API calls
      options: {
        cacheName: "no-cache",
      },
    },
  ],
});

const nextConfig = {};

export default withPWA(nextConfig);

// export default nextConfig;
