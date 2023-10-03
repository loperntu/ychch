/* 改字體步驟：
  1.在google font網站產出連結 2.把連結寫在index.html最上面 3.到這裡改fontFamily
  
  # 第一版 fontFamily: {
      primary: "Lexend",
      secondary: "Zilla",
      tertiary: "Aldrich",
    },
  # 第二版   fontFamily: {
      primary: "Outfit",
      secondary: "Spline Sans",
      tertiary: "Aldrich",
    },
 # 第三版   都用明體 Noto Serif TC
*/
/* 新增自定義的color：
  theme: {
  ...
   extend: {
      colors: {
        ...
        mybrown: "#c6653a",
        mylightbrown: "#E1C9B9",
      },
    }
  }
*/

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
