/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF934F",
        secondary: {
          DEFAULT: "#f5ed31",
          100: "#FF9001",
          200: "#FF8E01",
        },
        dark: {
          DEFAULT: "#373637",
          100: "#353435",
          200: "#151415",
        },
      },
      fontFamily:{

        
        Orbitron:["Orbitron","sans-serif"],
        Ubuntubold:["Ubuntu-bold","sans-serif"], 
        Ubunturegular:["Ubuntu-regular","sans-serif"],
        Ubuntuitalic:["Ubuntu-italic","sans-serif"], 
        Nunito:["Nunito","sans-serif"]


        

      }
    },
  },
  plugins: [],
};

