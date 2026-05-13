import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // Only split out vendor libs that don't import React. Splitting React or
          // any of its consumers (@react-three, react-globe.gl, drei, etc.) into a
          // separate chunk breaks cross-chunk React identity and the page won't render.
          if (id.includes('hls.js') || id.includes('url-toolkit') || id.includes('eventemitter3'))
            return 'hls';
          if (id.includes('three-globe')) return 'three-globe';
          if (id.includes('node_modules/three/') || id.includes('three-stdlib')) return 'three';
        },
      },
    },
  },
});
