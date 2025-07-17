import { View, Text, SafeAreaView, ScrollView, Alert,Image, ActivityIndicator } from 'react-native'
import React,{useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link, router} from 'expo-router'
import axios from 'axios'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import Constants from 'expo-constants'


const extra = (Constants.expoConfig?.extra || {}) as {
  API_URL?: string;
};
const API_URL = extra?.API_URL


const Signup = () => {
  const darkMode = useSelector((state:RootState)=>(state).darkmode.darkmode)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [form,setForm] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })



  const submit= async()=>{
    if (isSubmitting) return;
    setIsSubmitting(true)

    if (!form.name || !form.email || !form.password || form.name.trim().length==0 ||  form.email.trim().length==0 || form.password.trim().length==0){
      Alert.alert("Invalid Information","Please fill in the required fields")
      return setIsSubmitting(false);
    }
    
    else if (form.confirmPassword!= form.password){
      Alert.alert("Comfirm your password","Passwords do not correlate")
      return setIsSubmitting(false);
    }

    else if (form.password.length<8){
      Alert.alert("Password too short","The characters in your password must be more than 8 ")
      return setIsSubmitting(false); 
    }
    

    try {
      const response = await axios.post(`${API_URL}/auth/register`,{name:form.name,email:form.email.toLowerCase(),password:form.password})
      console.log(response.data)
      if (response.status == 201){
        Alert.alert("Account created successful","Redirecting to signin")
        router.replace('/signin')
      }
      else{
        Alert.alert(response.data.message)
      }
      

    } 
    catch (error:unknown) {
      if (axios.isAxiosError(error)){
        Alert.alert ("Error signing up",error.response?.data.message || "Unknown error")
      }
      else{
         Alert.alert ("Error signing up","Unknown error")
      }
      
    }
    finally{
      setIsSubmitting(false)
    }

  }


  return (
    <SafeAreaView className={`${darkMode?'bg-midnightBlue':'bg-stone-100'} h-full w-full`}>
      <ScrollView className='relative'>


        {isSubmitting && (<View className='w-full h-screen absolute justify-center items-center bg-midnightBlue/60 z-20'>
          <ActivityIndicator size='large' color="#BFFB4E" />
        </View>)}


        <View className='w-full h-screen justify-between px-6 gap-6'>

              <View className='gap-6'>
                <View className="w-full flex-row items-center gap-6 mt-16 mb-4">
                  <Image source={require('@/assets/logo.png')} className="w-8 h-8 object-contain"/>
                  <Text className={`text-xl ${ darkMode ?"text-primary":"text-midnightBlue"} font-ZenDots text-center`}>LIFT MOBILE</Text>
                </View>

                <Text className={`${darkMode?'text-white':'text-midnightBlue'} text-4xl font-Inter-bold w-full`}>
                  Create account
                </Text>

                <View className='gap-1'>
                  <FormField placeholdertext= 'Name' icon={<FontAwesome5 name="user-circle" size={24} color="#374151" />}  value ={form.name} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, name:e})} title={null}/>

                  <FormField placeholdertext= 'E-mail' icon={<Fontisto name="email" size={24} color="#374151" />} value ={form.email} keyboardType = 'email-address' handlechangetext={(e:string)=>setForm({...form, email:e})} title={null}/>

                  <FormField placeholdertext= 'Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={form.password} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, password:e})} title={null}/>

                  <FormField placeholdertext= 'Confirm Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={form.confirmPassword} keyboardType = 'default' handlechangetext={(e:string)=>{
                    setForm({...form,confirmPassword:e})
                    }} title={null}/>
                </View>
                  
            </View>

            <View className='mb-6 gap-6'>
                <View className='w-full flex-row justify-center'>
                  <View className='w-28'>
                    <Button title ='Sign Up' handlepress = {submit}/>
                  </View>
                </View>
                <View >
                  <Link href='/(Signup)/signin' className='text-xl underline underline-offset-2 text-center text-gray-600'>
                    Have an account already?
                  </Link>
                </View>
            </View>


  



        </View>
      </ScrollView>  
    </SafeAreaView>
    
  )
}

export default Signup