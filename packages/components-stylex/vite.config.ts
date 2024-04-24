import { resolve, join } from 'path';
import { fileURLToPath, URL } from "url";
import dts from "vite-plugin-dts";
import {defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import stylexPlugin from '@stylexjs/rollup-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ["es"],
      fileName: "index",
      entry: resolve(__dirname, './src/index.ts'),
    },
    rollupOptions: {
       external: ["react", "react-dom"],
       output: {
            globals: {
            react: "React"
         },
       },
       plugins: [
           stylexPlugin({
               // Required. File path for the generated CSS file.
               fileName: "styles.css",
               // default: false
               dev: false,
               // prefix for all generated classNames
               classNamePrefix: 'x',
               // Required for CSS variable support
               unstable_moduleResolution: {
                   // type: 'commonJS' | 'haste'
                   // default: 'commonJS'
                   type: 'commonJS',
                   // The absolute path to the root directory of your project
                   rootDir: __dirname,
               },})
       ]
    }
  },
  resolve: {
      alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
      }
  },
  clearScreen: false,

  plugins: [react(), dts({
      outDir: "dist",
  })],
})


