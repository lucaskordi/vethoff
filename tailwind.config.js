/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#223958',
        secondary: '#BA805B',
        lightBlue: '#B9D5EA',
        lightBeige: '#EBDDCC',
        white: '#FFFFFF',
      },
      fontFamily: {
        brandink: ['BrandinkSans', 'sans-serif'],
        dancing: ['DancingScript', 'cursive'],
        merriweather: ['MerriweatherSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

