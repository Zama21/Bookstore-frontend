import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        envCompatible(),
        // jsconfigPaths()
    ],
    resolve: {
        // alias: [{ find: '@', replacement: path.join(__dirname, 'src') }],
    },
});
