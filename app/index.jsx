import { Link,Redirect,router } from "expo-router";
import { Image, Text, TouchableHighlight, TouchableOpacity, View,SafeAreaView, ScrollView, ImageBackground} from "react-native";
import Button from './Components/Button'
import { AppContext,AppProvider } from './Context'
import { useContext } from "react";





 


export default function Index() {
  const {isLoggedIn,setIsLoggedIn} = useContext(AppContext)


  return (
    <SafeAreaView className="bg-dark-200 flex-1 justify-center items-center">
      <ScrollView className="w-full h-full">
        <Text className="text-5xl text-primary font-logam w-full mt-56 text-center">Lift mobile</Text>
        <Text className="text-2xl text-primary text-center mt-16 font-Handlee">Ride, Share, Earn</Text>
        <ImageBackground source={require('../assets/images/Homepage car.png')} resizeMode="cover" className="w-full h-full justify-center items-center">
          <View className="top-10">
            <Button title ='Continue with email' handlepress = {()=>{ router.push('/(Tabs)/home') }}/> 
          </View>

          
        </ImageBackground>
       
      </ScrollView>

      

    </SafeAreaView >
  )
}
