import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        'tw-text-40': 'clamp(1.75rem, 1.6273rem + 0.7273vw, 2.5rem)',
        'tw-text-30': 'clamp(1.5rem, 1.4386rem + 0.3636vw, 1.875rem)',
        'tw-text-26': 'clamp(1.25rem, 1.1886rem + 0.3636vw, 1.625rem)',
        'tw-text-20': 'clamp(1.125rem, 1.1045rem + 0.1212vw, 1.25rem)',
        'tw-text-18': 'clamp(1rem, 0.9795rem + 0.1212vw, 1.125rem)',
        'tw-text-16': 'clamp(0.875rem, 0.8545rem + 0.1212vw, 1rem)',
        'tw-text-14': 'clamp(0.75rem, 0.7295rem + 0.1212vw, 0.875rem)',
      },
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
