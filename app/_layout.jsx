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
    "Orbitron" : require("../assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"),
    "Ubuntu-bold" : require("../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
    "Ubuntu-regular" : require("../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu-italic" : require("../assets/fonts/Ubuntu/Ubuntu-Italic.ttf"),
    "Nunito" : require("../assets/fonts/Nunito/Nunito-VariableFont_wght.ttf"),

   
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
