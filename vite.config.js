import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line no-undef
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
});
