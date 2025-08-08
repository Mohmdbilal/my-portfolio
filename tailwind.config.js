/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // added jsx/ts support if needed
  theme: {
    extend: {
      fontFamily: {
        spline: ['var(--font-spline-mono)'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-3200px)' }, // based on 8 x 400px
        },
      },
      animation: {
        'scroll-loop': 'scroll 60s linear infinite',
      },
    },
  },
  plugins: [],
}
