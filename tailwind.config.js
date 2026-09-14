/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          50: '#FFFBFC',
          100: '#F0F4F8',
          200: '#D9E2E9',
          300: '#BACAD6',
          400: '#7E96AC',
          500: '#546F88',
          600: '#334B65',
          700: '#20344D',
          800: '#14253A',
          900: '#0C1D32',
          950: '#071321',
        },
        accent: {
          light: '#E8F4F9',
          muted: '#80BCD6',
          DEFAULT: '#007AAD',
          hover: '#00638C',
          dark: '#004D6E',
        },
        wood: {
          light: '#80BCD6',
          DEFAULT: '#007AAD',
          dark: '#00638C',
        }
      },
      fontFamily: {
        heading: ['"Bahnschrift"', '"DIN Alternate"', '"Barlow Semi Condensed"', '"DIN 1451"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        architectural: '0.08em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
