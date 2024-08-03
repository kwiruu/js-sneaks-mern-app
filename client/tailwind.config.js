/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
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
        jsyellow: '#FFC648',
        jsblack: '#10162F',
        jsblue: '#3A10E5',
        jsblue2: '#6747E8',
        jsgray: '#F6F8FA',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio', '@tailwindcss/forms')],
};
