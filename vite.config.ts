import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const cherryPickedKeys = ["VITE_BASE_URL", "VITE_API_URL"];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]));

  return {
    base: "/",
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
