module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  /* Lexend-50&Zilla-30 # Outfit&Spline Sans 
  改字體步驟：1.在google font網站產出連結 2.把連結寫在index.html最上面 3.到這裡改fontFamily*/
  theme: {
    fontFamily: {
      primary: "Noto Serif TC",
      secondary: "Noto Serif TC",
      tertiary: "Noto Serif TC",
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
