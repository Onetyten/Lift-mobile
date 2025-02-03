import { Link,Redirect,router } from "expo-router";
import { Image, Text, TouchableHighlight, TouchableOpacity, View,SafeAreaView, ScrollView, ImageBackground} from "react-native";
import Button from './Components/Button'
import { AppContext,AppProvider } from './Context'
import { useContext } from "react";





 


export default function Index() {
  const {isLoggedIn,setIsLoggedIn,darkMode, setDarkMode } = useContext(AppContext)
  console.log(darkMode)


  return (
    <SafeAreaView className={`${darkMode ? "bg-slate-900" : "bg-stone-100"} flex-1 justify-center items-center`}>
      <ScrollView className="w-full h-full">
        <Text className={`text-5xl ${ darkMode ?"text-white":"text-slate-900"} font-Orbitron w-full mt-56 text-center`}>Lift mobile</Text>
        <Text className={`text-2xl ${ darkMode ?"text-white":"text-slate-900"} text-center mt-16 font-Ubunturegular`}>Ride, Share, Earn</Text>
        <ImageBackground source={ darkMode? require('../assets/images/Homepage car.png') : require('../assets/images/Homepage car opacity.png')} resizeMode="cover" className="w-full h-full justify-center items-center">
          <View className="top-10">
            <Button title ='Continue with email' handlepress = {()=>{ router.push('/(Signup)/signup') }}/> 
          </View> 
        </ImageBackground>
       
      </ScrollView>

      

    </SafeAreaView >
  )
}
