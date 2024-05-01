// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        "poppins":["poppins","san serif"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ { "autoprefixer": "^9.8.8",
  "tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.2.17"}],
}