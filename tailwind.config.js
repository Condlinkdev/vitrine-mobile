/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        fundo: '#0F1B33',
        superficie: '#1D3B73',
        destaque: '#61DAFB',
        alerta: '#F0A500',
        suave: '#CBD5E1',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
};
