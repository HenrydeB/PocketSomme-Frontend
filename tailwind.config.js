/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        burgundy: '#800020',
        cream: '#F5F5DC'
      },
      fontFamily: {
        default: ['"Open Sans"']
      }
    },
  },
  plugins: [  ],
}

