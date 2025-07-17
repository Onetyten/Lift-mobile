import { Link,Redirect,router } from "expo-router";
import { Image, Text, TouchableHighlight, TouchableOpacity, View,SafeAreaView, ScrollView, ImageBackground} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Components/Button'
import { AppContext,AppProvider } from '../provider/Context'
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


export default function Index() {
  const userRedux = useSelector((state:RootState)=>state.user)
  const darkMode = useSelector((state)=>(state as any).darkmode.darkmode)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=>{
    const checkAuthentication =()=>{
      if (userRedux.token){
        setIsAuthenticated(true)
        console.log("user is already logged in.")
      }
      else{
        console.log('no token found redirect to login')
      }
    }
    checkAuthentication()

  },[]
)


  return (
    <SafeAreaView className={`${darkMode ? "bg-midnightBlue" : "bg-white"} flex-1 justify-center items-center`}>
      <ScrollView className="w-full h-full">
          <View className="w-screen h-screen flex-1 justify-center items-center">
            <View className="w-full flex-row justify-center items-center gap-6 flex-1 mt-[60%]">
              <Image source={require('@/assets/logo.png')} className="w-16 h-16 object-contain flex-row justify-center items-center"/>
              <Text className={`text-4xl ${ darkMode ?"text-primary":"text-midnightBlue"} font-ZenDots text-center`}>LIFT MOBILE</Text>
            </View>

            <ImageBackground source={ darkMode? require('../assets/images/Homepage car.png') : require('../assets/images/Homepage car opacity.png')} resizeMode="contain" className="w-full h-[50%] justify-center items-center" >
              <View className="top-10 w-[50%]">
                <Button title ='Continue' handlepress = {()=>{ 
                  isAuthenticated?router.push('/home'): router.push('/signup')
                  }}/> 
              </View> 
            </ImageBackground>
          </View>
      </ScrollView>

      

    </SafeAreaView >
  )
}
