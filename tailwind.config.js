/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'platform-pattern': "url('/abstract-blue-bg.png')",
      }
    },
  },
  plugins: [],
}

