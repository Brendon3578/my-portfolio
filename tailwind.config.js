const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'body': '#18181b',
        'zinc': colors.zinc,

        'primary': colors.rose,
        'secondary': colors.teal,

        'selected-text': '#a3a3ff',
        'theme': '#3f3fff',
        'nav': '#404053',
        'badge:': '#3f3f51',
        'input-border': '#565666',
        'input': '#2a2a35',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      boxShadow: {

      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}