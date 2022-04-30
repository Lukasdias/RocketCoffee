module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      background: "#000",
      "text-color": "#fff",
      button: "#8257e5",
      border: "#29292e",
      "border-menu-mobile": "#a8a8b3",
      "text-color-menu-mobile": "#e1e1e6",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["Manrope", "serif"],
    },
    extend: {
      backgroundImage: {
        "blur-desktop": "url(./assets/blur-1.png), url(./assets/blur-2.png)",
      },
      backgroundPosition: {
        desktop: "left, right",
      },
    },
  },
  plugins: [],
};
