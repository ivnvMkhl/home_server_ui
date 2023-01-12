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
                '@components': path.resolve(__dirname, './src/components'),
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
