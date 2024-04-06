/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        gray: "#171717",
        lightgray: "#0f0f0f",
        boulder: "#787878",
        dovengray: "#666666",
        lightBlack:"#343434",
        pink:"#FF006B",
      },
      backgroundImage: {
        mainbg: "url('/assets/images/webp/bg-image-main.webp')",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}