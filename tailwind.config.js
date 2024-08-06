/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          darker:'#222831',
          dark:'#31363F',
          neutral:'#76ABAE',
          base:'#EEEEEE'
        }
      }
    },
  },
  plugins: [],
}

