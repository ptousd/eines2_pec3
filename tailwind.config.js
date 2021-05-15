const { cyan } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
  ],
  theme: {
    fontFamily: {
       'serif': ['Montserrat', 'serif'],
       'serif-header': ['Vollkorn', 'serif'],
      },
    minHeight: {
       '52': '13rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        indigo: colors.indigo,
        lima: colors.lime,
        cyan: colors.cyan,
        'primary': '#17a095',
        'secondary': '#6590aa',
        dark: '#666',
        yellow: {
          300: '#c49815'
        },
    }
  },
  variants: {},
  plugins: [],
}