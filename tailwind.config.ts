import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem',
          xl: '85px',
        },
      },
      screens: {
        'tw-default': '1110px',
      },
      colors: {
        'tw-primary-color': {
          light: '#F6303F',
          DEFAULT: '#D2202C',
          dark: '#9f1821',
        },
        'tw-secundary-color': {
          light: '#707070',
          DEFAULT: '#323237',
          dark: '#030304',
        },
        'tw-neutral': {
          0: '#FFFFFF',
          100: '#F5F5F7',
          200: '#E0E0E0',
          300: '#707070',
          400: '#2F2E41 ',
          500: '#000000',
        },
      },
    },
  },
  plugins: [],
}
export default config
