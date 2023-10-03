module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Outfit",
      secondary: "Spline Sans",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
        mybrown: "#c6653a",
        mylightbrown: "#E1C9B9",
        myred: "#8B0000",
        mygreen: "#80A492",
      },
      backgroundImage: {
        site: "url('./assets/fullwhite.jpg')",
        about: "url('./assets/tang_wenhuitu_small.png')",
        services: "url('./assets/tang_wenhuitu_small.png')",
      },
    },
  },
  plugins: [],
};
