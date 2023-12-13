import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import Compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://unwrapped.design',
  integrations: [tailwind(), Compress(), partytown(), sitemap(), react()]
});