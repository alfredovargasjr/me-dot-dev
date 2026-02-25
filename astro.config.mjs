import { defineConfig } from "astro/config";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
    host: "0.0.0.0",
  },
  adapter: node({
    mode: "standalone",
  }),
});
