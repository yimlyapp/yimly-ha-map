import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: 'esbuild',
    lib: {
      entry: path.resolve(import.meta.dirname || '.', 'src/yimly-ha-map-card.ts'),
      name: 'YimlyHaMap',
      fileName: () => 'yimly-ha-map.js',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'yimly-ha-map.js',
      },
    },
  },
});
