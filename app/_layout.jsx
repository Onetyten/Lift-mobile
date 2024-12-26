import { Stack } from "expo-router";
import "../index.css";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import {AppProvider} from './Context'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
    //funnel font links

    "Funnel_Display" : require("../assets/fonts/Funnel_Display/FunnelDisplay-VariableFont_wght.ttf"),
    "Funnel_Display-Bold" : require("../assets/fonts/Funnel_Display/static/FunnelDisplay-Bold.ttf"),
    "Funnel_Display-ExtraBold" : require("../assets/fonts/Funnel_Display/static/FunnelDisplay-ExtraBold.ttf"),
    "Funnel_Display-Semi-Bold" : require("../assets/fonts/Funnel_Display/static/FunnelDisplay-SemiBold.ttf"),
    "Funnel_Display-Light" : require("../assets/fonts/Funnel_Display/static/FunnelDisplay-Light.ttf"),


    //quicksand font links not yet operaable for some reason try normal styling
    "Quicksand" : require("../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf"),
    "Quicksand-bold" : require("../assets/fonts/Quicksand/static/Quicksand-Bold.ttf"),
    "Quicksand-light" : require("../assets/fonts/Quicksand/static/Quicksand-Light.ttf"),
    "Quicksand-medium" : require("../assets/fonts/Quicksand/static/Quicksand-Medium.ttf"),
    "Quicksand-regular" :require("../assets/fonts/Quicksand/static/Quicksand-Regular.ttf"),
    "Quicksand-semibold" : require("../assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf"),


    //reddit sans
    "Reddit" : require("../assets/fonts/Reddit_Sans_Condensed/RedditSansCondensed-VariableFont_wght.ttf"),

    //roboto
    "Roboto" : require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-bold" : require("../assets/fonts/Roboto/Roboto-Black.ttf"),

    "AnkhSanctuary" : require("../assets/fonts/ankh-sanctuary-font/AnkhSanctuary-PVK0B.ttf"),
    "EduAU" : require("../assets/fonts/Edu_AU_VIC_WA_NT_Hand/EduAUVICWANTHand-VariableFont_wght.ttf"),
    "logam" : require("../assets/fonts/logam-font/LogamRegular-8Mv2J.otf"),
    "Annie" : require("../assets/fonts/Annie_Use_Your_Telescope/AnnieUseYourTelescope-Regular.ttf"),
    "Handlee" : require("../assets/fonts/Handlee/Handlee-Regular.ttf"),





   
  })

  useEffect(()=>{
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if (!fontsLoaded && !error) return null;


  return(
      <AppProvider>
        <Stack>
          <Stack.Screen name="index" options={{headerShown:false}} />
          <Stack.Screen name="(Tabs)" options={{headerShown:false}} />
          <Stack.Screen name="(Signup)" options={{headerShown:false}} />
          <Stack.Screen name="CategoryTab" options={{headerShown:false}} />


        </Stack>
      </AppProvider>


  );
}
