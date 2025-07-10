import { View, Text, SafeAreaView, ScrollView,Alert ,Image} from 'react-native'
import React, { useContext,useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link,Redirect,router } from 'expo-router'
import { AppContext,AppProvider } from '../../provider/Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';





const Signin = () => {
  const {form,setForm,isLoggedIn,setIsLoggedIn,darkMode} = useContext(AppContext)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const submit =async  ()=>{
    // console.log("pressed")
    if (!form.email || !form.password){
          console.log("not here")
          Alert.alert("Invalid Information","Please fill in the required fields")
        }

    else{
      try {
        const response = await fetch("http://192.168.43.241:1001/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email:form.email, password:form.password }),
      })
      const data = await response.json()
      if (data.status === "ok") {
        await AsyncStorage.setItem("token", data.token)
        console.log("Login successful", data);
        router.replace('/(Tabs)/home')

    } else {
        console.log("Login failed", data.data);
        Alert.alert("Login Failed", data.data);
    }

      } catch (error: unknown) {
         if (error instanceof Error){
          Alert.alert("Error",error.message)
         }
         else{
          Alert.alert("Error","Error unknown Reload the app")
         }
         
      }
    }
  }



  return (

        <SafeAreaView className={`${darkMode?'bg-midnightBlue':'bg-stone-100'} h-full w-full`}>
        <ScrollView>
          <View className='w-full h-screen justify-between px-6 gap-6'>

                <View className='gap-6'>
                  <View className="w-full flex-row items-center gap-6 mt-16 mb-4">
                    <Image source={require('@/assets/logo.png')} className="w-8 h-8 object-contain"/>
                    <Text className={`text-xl ${ darkMode ?"text-primary":"text-midnightBlue"} font-ZenDots text-center`}>LIFT MOBILE</Text>
                  </View>

                  <Text className={`${darkMode?'text-white':'text-midnightBlue'} text-4xl font-Inter-bold w-full`}>
                    Welcome back
                  </Text>

                  <View className='gap-1'>
                    <FormField placeholdertext= 'E-mail' icon={<Fontisto name="email" size={24} color="#374151" />} value ={form.email} keyboardType = 'email-address' handlechangetext={(e:string)=>setForm({...form, email:e})}/>
                    <FormField placeholdertext= 'Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={form.password} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, password:e})} />

                    </View>
                    
              </View>

              <View className='mb-6 gap-6'>
                  <View className='w-full flex-row justify-center'>
                    <View className='w-28'>
                      <Button title ='Sign In' handlepress = {submit}/>
                    </View>
                  </View>
                  <View>
                    <Link href='/(Signup)/signup' className='text-xl underline underline-offset-2 text-center text-gray-600'>
                      Dont have an account?
                    </Link>
                  </View>
              </View>


    



          </View>
        </ScrollView>  
      </SafeAreaView>
    
  )
}

export default Signin