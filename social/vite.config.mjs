import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

const socialDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(socialDir, '..');

// Standalone app for rendering Instagram posts. It reuses the site's styles,
// fonts (public/), components and data, but never takes part in the site build.
export default defineConfig({
  root: socialDir,
  publicDir: path.join(projectRoot, 'public'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(projectRoot, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss({ config: path.join(socialDir, 'tailwind.config.cjs') }), autoprefixer()],
    },
  },
  server: {
    fs: { allow: [projectRoot] },
  },
  logLevel: 'warn',
});
