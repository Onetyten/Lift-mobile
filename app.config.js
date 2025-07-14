// app.config.js
export default ({ config }) => {
  return {
    ...config, // This spreads any existing config properties if you're merging
    name: "Lift mobile",
    slug: "Lift mobile",
    version: "2.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff"
      },
      package: "com.onetyten.RideShare"
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/logo.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/splashscreen.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      API_URL:process.env.API_URL,
      router: {
        origin: false
      },
      eas: {
        projectId: "44c96f7f-a1e7-4158-b622-53f7ed064757"
      }
    }
  };
};