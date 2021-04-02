module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'redc': '#BF0A30',
        'bluec': '#002868',
        'greyc': '#f8f8f8',
      },
      fontFamily: {

      },
      screens: {
        'tablet': '960px',
      },
      width: {
        '600': '600px',
        '619': '619px',
        '280': '280px',
        '300': '300px',
        '330': '330px',
        '450': '450px',
        '470': '470px',
        '480': '480px'
      },
      height: {
        '1080': '1080px',
        '750': '750px',
        '650': '650px',
        '500': '500px',
        '440': '440px',
        '413': '413px',
        '400': '400px',
        '480': '480px'
      },
      inset: {
        '-23': '-23px',
        '30': '30px',
        '51': '51px',
        '80': '80px',
        '240': '240px',
        '-300': '-300px',
        '300': '300px',
        '600': '600px',

      },
      padding: {
        '245': '245px',
        '250': '250px',
        '400': '400px'
      },
      boxShadow: {
        'bs': '0 0 0 10px rgba(171, 4, 39, 1)',
        'bs2': '0 0 40px rgba(0 ,0 ,0 , 0.25)',
      },
      borderWidth: {
        '6': '6px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-hamburgers')],


}
