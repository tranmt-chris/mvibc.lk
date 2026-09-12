import type { NextConfig } from 'next';

const deployTarget = process.env.DEPLOY_TARGET;
const isStaticExport = deployTarget === 'github-pages' || deployTarget === 'cpanel';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  trailingSlash: isStaticExport,
};

export default nextConfig;
