import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./src/index.ts",
      name: "bolido-vue",
      fileName: "bolido-vue",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [vue()],
});
