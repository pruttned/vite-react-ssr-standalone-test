import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/server.ts"),
      name: "MyServer",
      formats: ["cjs"],
      fileName: (format) => `server.cjs`,
    },
    rollupOptions: {
      // external: ["react", "react-dom"],
    },
  },
});
