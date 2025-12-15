import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#faf5fb',
          100: '#f4e8f7',
          200: '#ead4f0',
          300: '#dbb3e5',
          400: '#c586d6',
          500: '#ad5cc4',
          600: '#870093',
          700: '#7a0084',
          800: '#66006d',
          900: '#54005a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
