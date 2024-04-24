import { resolve } from 'path';
import { fileURLToPath, URL } from "url";
import dts from "vite-plugin-dts";
import {defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ["es"],
      fileName: "index",
      entry: resolve(__dirname, './src/index.ts'),
    },
    rollupOptions: {
       external: ["react", "react-dom", "tailwindcss"],
       output: {
            globals: {
            react: "React"
         },
       },
    }
  },
    css:{
      postcss: {
          plugins: [tailwindcss]
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


