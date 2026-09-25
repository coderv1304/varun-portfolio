/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#eef1fb",
        foreground: "#2d3250",
        cyan: "#7c93f0",
        purple: "#b9a6f0",
      },
    },
  },
  plugins: [],
};