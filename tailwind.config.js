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
        'primary': '#007167',
        'secondary': '#6590aa',
        dark: '#000',
        yellow: {
          300: '#8f6a00'
        },
    }
  },
  variants: {},
  plugins: [],
}