/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    rise: {
      '0%': { transform: 'translateY(100vh)', opacity: 0 },
      '100%': { transform: 'translateY(-10vh)', opacity: 1 },
    },
    drift: {
      '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
      '50%': { transform: 'translateX(15px) rotate(5deg)' },
    },
  },
  animation: {
    float: 'float 4s ease-in-out infinite',
    rise: 'rise 10s linear infinite',
    drift: 'drift 6s ease-in-out infinite',
  },
},
  },
  plugins: [],
}
