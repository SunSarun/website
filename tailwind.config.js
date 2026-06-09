/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        primary: '#10b981',
        secondary: '#84cc16',
      },
    },
  },
  plugins: [],
}
