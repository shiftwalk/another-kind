const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
        marqueeSlow: 'marquee 55s linear infinite',
        marquee2Slow: 'marquee2 55s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-white': '#FCF9EB',
        'yellow': '#FFE549',
        'orange': '#FF5938',
        'green': '#00664E',
        'blue': '#00C1C2',
        'pink': '#FFA89B',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      },
      fontFamily: {
        sans: ['var(--font-Sohne)', ...fontFamily.sans],
        display: ['var(--font-VCGaramondCondensed)', ...fontFamily.serif],
        displayItalic: ['var(--font-PPEditorialNewItalic)', ...fontFamily.serif],
        mono: ['var(--font-Verlag)', ...fontFamily.mono],
      },
    },
  },
  plugins: []
}