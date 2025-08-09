/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pakistan: {
          50: '#f0f9f3',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1aa',
          400: '#57b880',
          500: '#34a062',
          600: '#26814c',
          700: '#20663e',
          800: '#1d5235',
          900: '#19432c',
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}