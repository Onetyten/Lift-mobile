import { View, Text, SafeAreaView, ScrollView,Alert ,Image,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link,router } from 'expo-router'
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux'
import { setUser,clearUser } from '@/redux/state/userSlice'
import axios from 'axios'
import Constants from 'expo-constants'
import { RootState } from '@/redux/store'
const extra = (Constants.expoConfig?.extra || {}) as {
  API_URL?: string;
};
const API_URL = extra?.API_URL






const Signin = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state:RootState)=>state.darkmode.darkmode)
  const userRedux = useSelector((state:RootState)=>state.user)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [form,setForm] = useState({
    email:'',
    password:''
  })

  const submit =async  ()=>{
    if (isSubmitting) return;
    setIsSubmitting(true)

    if (!form.email || !form.password ||  form.email.trim().length==0 || form.password.trim().length==0){
      Alert.alert("Invalid Information","Please fill in the required fields")
      return setIsSubmitting(false);
    }
    try 
    {
      const response = await axios.post(`${API_URL}/auth/login`,{email:form.email.toLowerCase(),password:form.password})
      if (response.status != 200) return
      const data = await response.data
      dispatch(setUser(data.data))
      // router.push('/home')
      Alert.alert("Welcome",`${data.message}`)
    }

    catch (error:unknown) {
      if (axios.isAxiosError(error)){
        Alert.alert (error.response?.data.message || "Unknown error")
      }
      else{
         Alert.alert ("Unknown error")
      }
      dispatch(clearUser())
      
    }
    
    finally
    {
        setIsSubmitting(false)
    }


    
  }



  return (

        <SafeAreaView className={`${darkMode?'bg-midnightBlue':'bg-stone-100'} h-full w-full`}>
        <ScrollView>


          {isSubmitting && <View className='w-full h-screen absolute justify-center items-center bg-midnightBlue/60 z-20'>
            <ActivityIndicator size='large' color="#BFFB4E" />
          </View>}


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
                    <FormField placeholdertext= 'E-mail' icon={<Fontisto name="email" size={24} color="#374151" />} value ={form.email} keyboardType = 'email-address' handlechangetext={(e:string)=>setForm({...form, email:e})} title={null}/>
                    <FormField placeholdertext= 'Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={form.password} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, password:e})} title={null} />

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