/** @type {import('tailwindcss').Config} */
import bg from "./src/img/bg.jpg"
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': bg,
      }
    },
  },
  plugins: [],
};
