/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': 'rgba(255,255,255,1)',
        'secondary': 'rgba(2,0,36,1)',
      }),
      linearGradientDirections: {
        '317': '317deg',
      },
      linearGradientColors: {
        'gradient': ['var(--color-primary)', 'var(--color-secondary)'],
      },

      backgroundColor: {
        'newbg': 'rgb(0, 52, 61)',
      
        'hrcolor' : 'rgb(9,216,161)',

        'hoverbg':'rgb(0,103,108)'
        
      },

      textColor:{

        'tg' : 'rgb(9,216,161)',
       
        
      },

      
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  
   
  ],
 

  

  
});
