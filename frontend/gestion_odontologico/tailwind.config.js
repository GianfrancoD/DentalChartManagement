/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
    screens: {
      movil: "20em",
      tablet: "40em",
      laptop: "64em",
      desktop: "80em",
      sm: "30em",
      md: "48em",
      lg: "61em",
      xl: "90em",
      xxl: "100em",
    },
  },
  plugins: [],
};
