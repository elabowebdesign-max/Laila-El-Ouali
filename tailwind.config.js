/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#377876',
          light: '#4f9b98',
          dark: '#265453',
        },
        secondary: {
          DEFAULT: '#C6A65D',
          light: '#d6be85',
          dark: '#a18342',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
