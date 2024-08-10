/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGreen:'#9ad554',
        beige:'#efe9df',
      },
      fontFamily: { 
        "poppins":['Poppins','Montserrat'],
        "domine":['Domine','Inter'],
    },
    },
  },
  plugins: [],
}