/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
