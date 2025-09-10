// next.config.js
await import('./src/server/env.js');

/** @type {import("next").NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default config;
