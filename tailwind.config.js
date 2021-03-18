module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'wraith': "url('/src/images/site-background-blurred.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
