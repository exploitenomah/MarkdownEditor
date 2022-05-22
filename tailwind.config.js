module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-twice': 'bounce 2s linear 2 reverse backwards',
        'ping-once': 'ping 1s ease-in-out 1 reverse backwards '
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
