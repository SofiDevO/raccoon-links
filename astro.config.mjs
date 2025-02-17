import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://link.itssofi.dev",
  adapter: vercel(),
  output: "server",
  integrations: [react(), mdx()],

});