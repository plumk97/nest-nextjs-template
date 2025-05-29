import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
        tsconfigPath: './tsconfig.next.json',
    }
};

export default nextConfig;