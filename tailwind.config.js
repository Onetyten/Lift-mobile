/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF934F",
        secondary: {
          DEFAULT: "#F5ED31",
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
        Funnel:["Funnel_Display","sans-serif"],
        FunnelBold:["Funnel_Display-Bold","sans-serif"],
        FunnelExtraBold:["Funnel_Display-ExtraBold","sans-serif"],
        FunnelSemibold:["Funnel_Display-Semi-Bold","sans-serif"],
        FunnelLight:["Funnel_Display-Light","sans-serif"],




        QuickSand:["Quicksand","sans-serif"],
        QuickSandBold:["Quicksand-bold","sans-serif"],
        QuickSandLight:["Quicksand-light","sans-serif"],
        QuickSandMedium:["Quicksand-medium","sans-serif"],
        QuickSandRegular:["Quicksand-regular","sans-serif"], 
        QuickSandSemibold:["Quicksand-semibold","sans-serif"], 

        Reddit:["Reddit","sans-serif"],

        Roboto:["Roboto","sans-serif"], 
        RobotoBold:["Roboto-bold","sans-serif"], 

        

      }
    },
  },
  plugins: [],
};

