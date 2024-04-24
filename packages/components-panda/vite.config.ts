import { resolve } from 'path';
import { fileURLToPath, URL } from "url";
import dts from "vite-plugin-dts";
import {defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
       }
    }
  },
  resolve: {
      alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
          "@local/components-panda/css": fileURLToPath(new URL("./styled-system/css", import.meta.url)),
          "@local/components-panda/jsx": fileURLToPath(new URL("./styled-system/jsx", import.meta.url)),
          "@local/components-panda/patterns": fileURLToPath(new URL("./styled-system/patterns", import.meta.url)),
          "@local/components-panda/recipes": fileURLToPath(new URL("./styled-system/recipes", import.meta.url)),
          "@local/components-panda/tokens": fileURLToPath(new URL("./styled-system/tokens", import.meta.url)),
          "@local/components-panda/types": fileURLToPath(new URL("./styled-system/types", import.meta.url))
      }
  },
  clearScreen: false,

  plugins: [react(), dts({
      outDir: "dist",
  })],
})


