import { Stack } from "expo-router";
import "../index.css";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded,error] = useFonts({
    "Funnel_Display" : require("../assets/fonts/Funnel_Display/FunnelDisplay-VariableFont_wght.ttf"),
    "Quicksand" : require("../assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf"),
  })

  useEffect(()=>{
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if (!fontsLoaded && !error) return null;


  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="(Tabs)" options={{headerShown:false}} />

    </Stack>
  );
}
