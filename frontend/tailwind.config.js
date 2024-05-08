// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'san serif'],
      },
      height: {
        '1/10': '10%',
        '1/11': '90%',
      },
       colors: {
        'app-onyx': '#353839', // Replace with your exact color value
        'card-grey': '#E5E7EB', // Replace with your desired grey
      },
      height: {
        '1/10': '10%', // Navbar height
        '9/10': '90%', // Card section height
      },
 borderWidth: {
        '1': '1px',
        '3':'3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      autoprefixer: '^9.8.8',
      tailwindcss: 'npm:@tailwindcss/postcss7-compat@^2.2.17',
    },
  ],
}
