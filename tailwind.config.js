/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      colors: {
        mist: '#eef4f7',
        lavender: '#d8cdf4',
        blush: '#f7dce7',
        sage: '#bfd7c7',
        cream: '#fffaf2',
        ink: '#3f3a4a',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(105, 91, 132, 0.14)',
        'soft-dark': '0 18px 55px rgba(7, 10, 18, 0.28)',
      },
    },
  },
  plugins: [],
};
