/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#BFFB4E",
        midnightBlue: "#0F0E17",
        Light: "#EEEEFB",


        // primary: "#6854FF",
        // secondary: "#CD70EF",
        // midnightBlue: "#201D3B",
        // Black: "#121212",
        // Light: "#EEEEFB",
        // dark: {
        //   DEFAULT: "#373637",
        //   100: "#353435",
        //   200: "#151415",
        // },
      },
      fontFamily:{

        
        ZenDots:["ZenDots","sans-serif"],
        "Inter-bold":["Inter-bold","sans-serif"],
        "Inter-semibold":["Inter-semibold","sans-serif"],
        "Inter-medium":["Inter-medium","sans-serif"],
        "Inter-regular":["Inter-regular","sans-serif"],
        "Inter-italic":["Inter-italic","sans-serif"], 
        "Inter-light":["Inter-light","sans-serif"],
      
      }
    },
  },
  plugins: [],
};

