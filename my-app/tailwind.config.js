/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif', 'DM Sans'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}