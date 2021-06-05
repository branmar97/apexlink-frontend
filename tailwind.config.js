module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'wraith': "url('/src/images/site-background-blurred.png')"
      },
      fontFamily: {
        'duke': ["Duke"],
        'heebo': "url('https://fonts.googleapis.com/css2?family=Heebo&display=swap')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
