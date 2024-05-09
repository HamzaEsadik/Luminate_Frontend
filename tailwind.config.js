/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Helvetica"],
      },
      colors: {
        primary: {
          DEFAULT: '#5271FF',
          light: '#2498BC',
        },
        secondary: {
          DEFAULT: '#292929',
          dark: '#1D1D1D',
          light: '#F9F9F9',
        },
      },
      dropShadow: {
        'button': '0 5px 10px rgba(0, 0, 0, 0.05)',
        'input': '0 5px 10px rgba(0, 0, 0, 0.02)',
        'button2': '0 5px 20px rgba(0, 0, 0, 0.1)',
        'img': '0 0 25px rgba(0, 0, 0, 0.15)',
        'img2': '0 0 20px rgba(32, 113, 255, 0.15)',
      }
    },
  },
  plugins: [],
}

