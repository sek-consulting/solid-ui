/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./core/**/*.{ts,tsx,js,jsx}"
  ],
  presets: [require("../../suc.preset.js")]
}
