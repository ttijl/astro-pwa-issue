import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro'

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), AstroPWA({
	mode: 'production',
    base: '/',
    //registerType: 'autoUpdate',
    strategies: "generateSW",
    scope: '/',
	includeAssets: [
		"favicon.ico",
		// "icon-192.png",
		// "icon-512.png",
		// "icon-192-maskable.png",
		// "icon-512-maskable.png"
	],  
	workbox: {
		globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,mp4}'],
	},
    manifest: {
		short_name: "shortname",
		name: "examplename",
		icons: [/*{
		  src: "icon-192.png",
		  type: "image/png",
		  sizes: "192x192"
		}, {
		  src: "icon-512.png",
		  type: "image/png",
		  sizes: "512x512"
		}, {
		  src: "icon-192-maskable.png",
		  type: "image/png",
		  sizes: "192x192",
		  purpose: "maskable"
		}, {
		  src: "icon-512-maskable.png",
		  type: "image/png",
		  sizes: "512x512",
		  purpose: "maskable"
		}*/],
		id: "/",
		start_url: "/",
		background_color: "#212121",
		display: "standalone",
		scope: "/",
		theme_color: "#f28c18",
		shortcuts: []
	  },
  })],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});