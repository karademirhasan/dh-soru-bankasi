import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `
          @import "./src/styles/variables";
          @import "./src/styles/mixins/mixins";
        `,
      },
    },
    modules: {},
  },
});
