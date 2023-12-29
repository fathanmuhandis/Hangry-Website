/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sauce': '#A30926',
      'sauce-light': '#C41230',
      'sauce-dark': '#7F041C',
      'white': '#FFFFFF'
    },
    fontFamily: {
      Inter: ["Inter", "sans-serrif"],
    },
  },
  plugins: [],
}