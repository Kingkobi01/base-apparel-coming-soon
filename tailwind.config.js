/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ### Primary
        primary: {
          100: 'hsl(0, 36%, 70%)',
          200: 'hsl(0, 93%, 68%)',
        },
        // ### Neutral
        neutral: {
          100: 'hsl(0, 6%, 24%)',
        },

      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}