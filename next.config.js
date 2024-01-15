/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/server/env.js');

/** @type {import("next").NextConfig} */
const config = { distDir: 'build', output: 'export' };

export default config;
