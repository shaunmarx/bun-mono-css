import { defineProject  } from "vitest/config";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";
import config from "./vite.config";


export default defineProject({
    test: {
        global: true,
        environment: "jsdom",
        include: ["src/**/*.spec.{tsx, ts}"],
        setupFiles: ['./vitest-setup.ts'],
    },
    resolve: config.resolve,
    plugins:[vanillaExtractPlugin()]
})