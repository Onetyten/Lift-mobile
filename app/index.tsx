import { Link,Redirect,router } from "expo-router";
import { Image, Text, TouchableHighlight, TouchableOpacity, View,SafeAreaView, ScrollView, ImageBackground} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Components/Button'
import { AppContext,AppProvider } from './Context'
import { useContext, useEffect, useState } from "react";





 


export default function Index() {
  const context = useContext(AppContext);
  if (!context) return null;
  const {darkMode } = context
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  console.log(darkMode)

  useEffect(()=>{
    const checkAuthentication = async()=>{
      const token = await AsyncStorage.getItem('token')
      if (token){
        setIsAuthenticated(true)
        console.log("user is already logged in.")
      }
      else{
        console.log('no token found redirect to login')
      }
    }
    const clearUserData = async () => {
      try {
        await AsyncStorage.clear(); // Clears all data in AsyncStorage
        console.log('AsyncStorage has been cleared.');
      } catch (error) {
        console.log('Error clearing AsyncStorage:', error);
      }
    };
    // clearUserData()
    checkAuthentication()

  },[])


  return (
    <SafeAreaView className={`${darkMode ? "bg-slate-900" : "bg-stone-100"} flex-1 justify-center items-center`}>
      <ScrollView className="w-full h-full">
        <Text className={`text-5xl ${ darkMode ?"text-white":"text-slate-900"} font-Orbitron w-full mt-56 text-center`}>Lift mobile</Text>
        <Text className={`text-2xl ${ darkMode ?"text-white":"text-slate-900"} text-center mt-16 font-Ubunturegular`}>Ride, Share, Earn</Text>
        <ImageBackground source={ darkMode? require('../assets/images/Homepage car.png') : require('../assets/images/Homepage car opacity.png')} resizeMode="cover" className="w-full h-full justify-center items-center">
          <View className="top-10">
            <Button title ='Continue with email' handlepress = {()=>{ 
              isAuthenticated?router.push('/(Tabs)/home'): router.push('/(Signup)/signup')
              }}/> 
          </View> 
        </ImageBackground>
       
      </ScrollView>

      

    </SafeAreaView >
  )
}
