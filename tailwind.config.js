/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {   
      fontFamily : {
      'Roboto' : ['Roboto','sans-serif'],
      'body' :   ['Roboto','sans-serif']
      },
      colors :{
        'pepito' : '#012571'
      }
    },
  },
  plugins: [],
}