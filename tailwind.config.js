/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'custom-600': '600px',
      },
    },
  },
  plugins: [ require('daisyui'),],
}

