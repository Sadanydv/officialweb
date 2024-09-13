/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '20%': { transform: 'translateX(-100%)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 }
        },
      },
      animation: {
        slide: 'slide 10s infinite'
      },
    },
  },
  plugins: [],
}