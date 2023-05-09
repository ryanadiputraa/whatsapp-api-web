/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05a884",
        secondary: "#111b21",
        grey: "#1f2c33",
        "light-grey": "#2a3942",
        white: "#f8f6f9",
      },
    },
  },
  plugins: [],
}
