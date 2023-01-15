import { defineConfig, loadEnv, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const commonPath: UserConfigExport = {
        plugins: [react()],
        resolve: {
            alias: {
                '@routing': path.resolve(__dirname, './src/routing'),
                '@components': path.resolve(__dirname, './src/components'),
                '@src': path.resolve(__dirname, './src'),
                '@helpers': path.resolve(__dirname, './src/helpers'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@interfaces': path.resolve(__dirname, './src/interfaces'),
            },
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: '[name]__[local]__[hash:base64:5]',
            },
        },
    };

    if (command === 'serve')
        return {
            server: {
                port: Number(process.env.VITE_PORT),
            },
            ...commonPath,
        };
    else {
        return { ...commonPath };
    }
});
