/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'bg-0': '#121010',
        'bg-1': '#1a1515',
        'bg-2': '#231d1c',
        'text-0': '#f3eee7',
        'text-1': '#c9bfb2',
        'text-2': '#93897b',
        'line-0': '#2d2625',
        'line-1': '#413736',
        'accent-red': '#8c3836',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 18px 60px rgba(0,0,0,0.28)',
        'card-lg': '0 24px 80px rgba(0,0,0,0.36)',
      },
    },
  },
  plugins: [],
}
