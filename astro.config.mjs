import { defineConfig,envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from '@astrojs/react';



import mdx from "@astrojs/mdx";





export default defineConfig({
  env:{
    schema: {
      WPGRAPHQL_URL: envField.string({ required: true, context: "server", access: "secret" }),
      YT_API: envField.string({ required: true, context: "client", access: "public" }),
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://link.itssofi.dev",
  adapter: vercel(),
  output: "server",
  integrations: [mdx(), , react()],

});