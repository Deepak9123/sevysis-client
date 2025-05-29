// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust as needed
  ],
  theme: {
  extend: {
    animation: {
      marquee: 'marquee 8s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
},
  plugins: [],
};
