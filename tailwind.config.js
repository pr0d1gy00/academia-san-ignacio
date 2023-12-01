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
      },
      screens : {
        'tablet-2' : '960px',
        'large-2' : '1250px'
      }
    },
  },
  plugins: [],
}