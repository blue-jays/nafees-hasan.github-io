/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1e1e1e",
        accent: {
          blue: "#2196F3",
          lightBlue: "#64B5F6",
          darkBlue: "#0D47A1"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
