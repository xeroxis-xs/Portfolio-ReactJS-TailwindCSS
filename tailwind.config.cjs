/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Poppins",
      Montserrat: "Montserrat",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#212A3E",
        bg_light_primary: "#F1F6F9",
        gray: "#9BA4B5",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #394867 0.48%, #D5E3F1 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
