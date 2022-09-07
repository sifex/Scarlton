/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'exo': ['"Exo 2"', 'ui-sans-serif', 'system-ui', ]
    },
    extend: {
      backgroundImage: {
        'aaf-background': "url('@/assets/images/background.png')",
        'aaf-background-2x': "url('@/assets/images/background_2x.png')",
        'scarlet-background': "url('@/assets/images/home_bg.png')",
        'scarlet-background-2x': "url('@/assets/images/home_bg_2x.png')",
      }
    },
  },
  plugins: [],
}
