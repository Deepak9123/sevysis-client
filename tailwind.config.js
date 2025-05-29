// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust as needed
  ],
  theme: {
    extend: {
      keyframes: {
        blinkFade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        blinkFade: 'blinkFade 2s infinite',
        slide: 'slide 6s linear infinite',
      },
    },
  },
  plugins: [],
};
