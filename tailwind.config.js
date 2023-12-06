/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'pigeon-post': {
        50: '#f2f5fb',
        100: '#e7edf8',
        200: '#d4def1',
        300: '#b7c5e6',
        400: '#9eabdb',
        500: '#8590cf',
        600: '#6c71bf',
        700: '#5b5fa7',
        800: '#4c5087',
        900: '#42456d',
        950: '#27293f',
      },
      zinc: '#18181b',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      red: '#dc2626',
    },
  },
  plugins: [],
}
