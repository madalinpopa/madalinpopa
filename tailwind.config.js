/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./madalinpopa/**/*.{html,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        '3xl':
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        custom: '0px 3px 10px 4px rgba(0, 0, 0, 0.2);',
        'stripe-shadow':
          '0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
