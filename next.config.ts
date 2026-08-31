import type { NextConfig } from 'next';

const deployTarget = process.env.DEPLOY_TARGET;
const isGitHubPages = deployTarget === 'github-pages';
const isStaticExport = isGitHubPages || deployTarget === 'cpanel';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  assetPrefix: isGitHubPages ? '/mvibc.lk/' : undefined,
  trailingSlash: isStaticExport,
};

export default nextConfig;
