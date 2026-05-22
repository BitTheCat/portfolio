/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./**/*.{html,js,jsx,ts,tsx}"],
    safelist: [],
  },
  theme: {
    extend: {
      colors: {
        accent: "#ee7f00",
        "accent-dark": "#ce6e00",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/assets/img/bg_img.jpg')",
      },
    },
  },
  plugins: [],
};
