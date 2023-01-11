import { defineConfig, loadEnv, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const buildCssModuleClassName = (name: string, filename: string) => {
        const pathPart = Array.from(new Set(filename.split('src/')[1].replace('.module.css', '').split('/'))).join('__');
        return `${pathPart}___${name}}`;
    };

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
                generateScopedName: buildCssModuleClassName,
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
