/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
      ],
  theme: {
    fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
