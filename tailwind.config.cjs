/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: false,
  theme: {
    extend: {
      textColor: {
        primary: "var(--text)",
      },
      backgroundColor: {
        primary: "var(--bg)",
      },
    },
  },
  plugins: [],
};
