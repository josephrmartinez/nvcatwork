import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
   site: 'https://unwrapped.design',
  integrations: [tailwind(), compress(), partytown(), sitemap()]
});