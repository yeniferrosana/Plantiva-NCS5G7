/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sp: {
          DEFAULT: "#402306", // Marrón
          50: "#25390b", // Verde Oscuro
          100: "#c4ffbf", // Verde Claro
          200: "#ece8d4", // Blanco de Fondo
        },
        /** fontFamily: {
          nunito: ["Nunito", "sans-serif"],
          mono: ["Space Mono", "monospace"],
        },**/
      },
    },
  },
  plugins: [],
};
