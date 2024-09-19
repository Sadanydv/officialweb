module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPink: 'rgb(234, 218, 235)',
        customGray: 'rgb(216, 199, 217)',
        customDarkPink: 'rgb(165, 126, 166)',
        customWhite:'rgb(240, 241, 245)',
        customGreen: 'rgb(209, 232, 200)',
        customYellow:'rgb(235, 226, 221)'
      },
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