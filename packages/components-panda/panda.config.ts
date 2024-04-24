import { defineConfig } from "@pandacss/dev";
import { preset } from "./src/preset";

export default defineConfig({

  presets: ["@pandacss/dev/presets", preset],
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'mjs',

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: ["./src/**/*.spec.{ts,tsx}"],

  staticCss: {
    recipes: {
      button: ['*'],
    }
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens:{
        colors: {
          primary: {
            value: "#0FEE0F"
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
  syntax: "object-literal"
});

