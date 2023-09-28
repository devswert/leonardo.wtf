/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "brand-light": "#FDF6EC",
        "brand-green": "#306564",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        hornbill: ["Hornbill"],
      },
    },
  },
  plugins: [],
};
