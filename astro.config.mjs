import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://link.itssofi.dev",
  adapter: vercel(),
  output: "server",
  integrations: [ mdx(), preact()],

});