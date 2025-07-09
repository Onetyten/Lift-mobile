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
    
    "ZenDots" : require("@/assets/fonts/Zen_Dots/ZenDots-Regular.ttf"),
    "Inter-bold" : require("@/assets/fonts/Inter/static/Inter_18pt-Bold.ttf"),
    "Inter-semibold" : require("@/assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf"),
    "Inter-medium" : require("@/assets/fonts/Inter/static/Inter_18pt-Medium.ttf"),
    "Inter-regular" : require("@/assets/fonts/Inter/static/Inter_28pt-Regular.ttf"),
    "Inter-italic" : require("@/assets/fonts/Inter/static/Inter_28pt-Italic.ttf"),
    "Inter-light" : require("@/assets/fonts/Inter/static/Inter_18pt-Light.ttf"),

   
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
          <Stack.Screen name="(Pages)" options={{headerShown:false}} />
          <Stack.Screen name="carDetails" options={{headerShown:false}} />
          <Stack.Screen name="categoryTab" options={{headerShown:false}} />
          <Stack.Screen name="rentalRules" options={{headerShown:false}} />
          <Stack.Screen name="Checkout" options={{headerShown:false}} />
          <Stack.Screen name="(Signup)" options={{headerShown:false}} />
          
        </Stack>
      </AppProvider>


  );
}
