/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
