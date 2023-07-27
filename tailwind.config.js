/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f5604a",
        secondary: "#fcbe5b",
        dark: "#202020",
      },
      container: {
        center: true,
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': theme('colors.gray[200]'),
            '--tw-prose-headings': theme('colors.gray[200]'),
            '--tw-prose-lead': theme('colors.gray[200]'),
            '--tw-prose-links': theme('colors.gray[200]'),
            '--tw-prose-bold': theme('colors.gray[200]'),
            '--tw-prose-counters': theme('colors.gray[200]'),
            '--tw-prose-bullets': theme('colors.gray[200]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.gray[200]'),
            '--tw-prose-quote-borders': theme('colors.gray[200]'),
            '--tw-prose-captions': theme('colors.gray[200]'),
            '--tw-prose-code': theme('colors.gray[200]'),
            '--tw-prose-pre-code': theme('colors.gray[200]'),
            '--tw-prose-pre-bg': theme('colors.gray[200]'),
            '--tw-prose-th-borders': theme('colors.pink[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.black'),
            '--tw-prose-invert-lead': theme('colors.black'),
            '--tw-prose-invert-links': theme('colors.black'),
            '--tw-prose-invert-bold': theme('colors.black'),
            '--tw-prose-invert-counters': theme('colors.black'),
            '--tw-prose-invert-bullets': theme('colors.black'),
            '--tw-prose-invert-hr': theme('colors.black'),
            '--tw-prose-invert-quotes': theme('colors.black'),
            '--tw-prose-invert-quote-borders': theme('colors.black'),
            '--tw-prose-invert-captions': theme('colors.black'),
            '--tw-prose-invert-code': theme('colors.dark'),
            '--tw-prose-invert-pre-code': theme('colors.dark'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.black'),
            '--tw-prose-invert-td-borders': theme('colors.black'),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

