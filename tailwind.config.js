module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto']
      }
    },

    screens: {
      'lg': {
        'min': '1200px'
      },

      'laptop': {
        'min': '980px'
      },
      // Tablet > 1024px

      'tablet': {
        'min': '740px',
        'max': '1023px'
      },
      // Tablet

      'mobile': {
        'max': '739px'
      },
      // Mobile
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}