const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '12rem'
      },
    },
    height: {
      st: '35vh',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      blue: colors.blue,
      green: colors.teal,
      white: colors.white,
      pink: colors.fuchsia,
      rose: colors.pink,
      yellow: colors.yellow,
      red: colors.rose,
    },
  },
  darkMode: 'media',
  variants: {
    extend: {},
  },
  plugins: [],
}
