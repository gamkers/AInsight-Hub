/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-1': 'float 6s ease-in-out infinite',
        'float-2': 'float 8s ease-in-out infinite',
        'float-3': 'float 7s ease-in-out infinite',
        'float-4': 'float 9s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradientBG 15s ease infinite',
      },
      backgroundSize: {
        'gradient': '400% 400%',
      },
    },
  },
  plugins: [],
};