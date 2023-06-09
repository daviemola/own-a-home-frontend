/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A5202C",
        secondary: "#BBB8B9",
        azure: "#eef2f2",
        sky: "#00ccff",
        blueshade400: "#0D112A",
        blueshade300: "#003F88",
        blueshade200: "#00509D",
        blueshade100: "#C9E6F3",
        yellowshade200: "#D19C05",
        yellowshade100: "#FFD509",
      },
      padding: {
        155: "155px",
        160: "160px",
      },
      backgroundImage: {
        "pattern-1": "url('/images/background/pattern-1.png')",
        "page-banner-1": "url('/images/page-banner/1.jpg')",
        "page-banner-2": "url('/images/page-banner/2.jpg')",
        "new-post": "url('/images/background/new-post.jpg')",
      },
      animation: {
        "fade-in-down": "fadeInDown 3s linear normal",
        fadeInUp: "fadeInUp 0.5s linear normal",
        move: "move 3s linear 1s infinite",
        move2: "move 3s linear 2s infinite",
        move3: "move 3s linear 3s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        move: {
          "0%": { opacity: 0 },
          "25%": { opacity: 0 },
          "33%": { opacity: 1, transform: "translateY(30px)" },
          "67%": { opacity: 1, transform: "translateY(40px)" },
          "100%": {
            opacity: 0,
            transform: "translateY(55px)",
          },
        },
      },
    },

    fontFamily: {
      inter: ["Inter, sans-serif"],
      heebo: ["Heebo, sans-serif"],
    },

    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "480px",
        lm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
    screens: {
      // Maximum Medium Query
      "max-lg": { max: "1199px" },
      "max-md": { max: "991px" },
      "max-lm": { max: "767px" },
      "max-sm": { max: "575px" },

      // Fixed Medium Query
      "fixed-xs": { max: "479px" },
      "fixed-sm": { min: "480px", max: "575px" },
      "fixed-lm": { min: "576px", max: "767px" },
      "fixed-md": { min: "768px", max: "991px" },
      "fixed-lg": { min: "992px", max: "1199px" },

      // Minimum Medium Query
      sm: "480px",
      lm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};
