import { Stack } from "expo-router";
import "../index.css";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { Provider, useDispatch } from "react-redux"; // useDispatch is used in the hook
import store,{persistor} from '@/redux/store'
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import { Appearance } from "react-native";
import { setDarkMode, setLightMode } from "@/redux/state/darkModeSlice";
import { AppProvider } from "@/provider/Context";

SplashScreen.preventAutoHideAsync();

// This hook uses useDispatch, so it must be called WITHIN a component that is a child of <Provider>
function useSystemDarkModeListener(){
  const dispatch = useDispatch()
  useEffect(()=>{
    const subscription = Appearance.addChangeListener(({colorScheme})=>{
      if (colorScheme === 'dark'){
        dispatch(setDarkMode())
      }
      else{
        dispatch(setLightMode())
      }
    })
    return ()=>subscription.remove()
  },[dispatch])
}

function AppContent() {
  useSystemDarkModeListener();

  const [fontsLoaded, error] = useFonts({
    "ZenDots" : require("@/assets/fonts/Zen_Dots/ZenDots-Regular.ttf"),
    "Inter-bold" : require("@/assets/fonts/Inter/static/Inter_18pt-Bold.ttf"),
    "Inter-semibold" : require("@/assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf"),
    "Inter-medium" : require("@/assets/fonts/Inter/static/Inter_18pt-Medium.ttf"),
    "Inter-regular" : require("@/assets/fonts/Inter/static/Inter_28pt-Regular.ttf"),
    "Inter-italic" : require("@/assets/fonts/Inter/static/Inter_28pt-Italic.ttf"),
    "Inter-light" : require("@/assets/fonts/Inter/static/Inter_18pt-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <PersistGate loading={<ActivityIndicator size="large" color="#BFFB4E"/>} persistor={persistor}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="(Tabs)" options={{headerShown:false}} />
        <Stack.Screen name="carDetails" options={{headerShown:false}} />
        <Stack.Screen name="categoryTab" options={{headerShown:false}} />
        <Stack.Screen name="rentalRules" options={{headerShown:false}} />
        <Stack.Screen name="Checkout" options={{headerShown:false}} />
        <Stack.Screen name="(Signup)" options={{headerShown:false}} />
      </Stack>
    </PersistGate>
  );
}


export default function RootLayout() {
  return(
    <Provider store={store}>
      <AppProvider>
            <AppContent />
      </AppProvider>
    </Provider>
  );
}