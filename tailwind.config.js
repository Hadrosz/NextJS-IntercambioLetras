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
      green: '#91AA9D',
      blueFort: '#193441',
      blueLight: '#6C99AC',
      gradientFrom: '#3E606F',
      gradientTo: '#599CC0',
      zinc: '#18181b',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      red: '#dc2626',
    },
  },
  plugins: [],
}
