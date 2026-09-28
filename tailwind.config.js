export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#9A5A2B', dark: '#7C4620', light: '#F1E7DC' },
        ink: { DEFAULT: '#292929', soft: '#55524E', muted: '#6F6B66' },
        warm: '#F8F7F3',
        sand: '#EEE9E1',
        sage: '#7E8A7A',
        tile: '#F7F7F7',
        line: '#E6E0D7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Inter', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
