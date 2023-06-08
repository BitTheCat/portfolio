/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './node_modules/@bitthecat/tailwind-vue-data-table/dist/*.js',
    './src/**/*.{js,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],?
}
