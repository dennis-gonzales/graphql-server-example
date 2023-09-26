
import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['server.ts'],
    outDir: 'dist',
    target: 'node16',
    platform: 'node',
    format: ['esm'],
    splitting: true,
    sourcemap: true,
    minify: true,
    shims: true,
    dts: true,
    clean: true
  },
]);
