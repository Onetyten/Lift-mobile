import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native'
import React,{useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link, router,Redirect } from 'expo-router'
import { AppContext,AppProvider } from '../Context'
import {createUser} from '../../lib/appwrite'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Signup = () => {
  const {form,setForm,isLoggedIn,setIsLoggedIn,darkMode} = useContext(AppContext)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [confirmPass, setConfirmPass] = useState('')
  const submit= async()=>{
    if (isSubmitting) return;
    setIsSubmitting(true)

    if (!form.userName || !form.email || !form.password){
      Alert.alert("Invalid Information","Please fill in the required fields")
      setIsSubmitting(false);
      return
    }
    
    else if (confirmPass != form.password){
      Alert.alert("Comfirm your password","Please fill in your registered password in the confirm password field")
      setIsSubmitting(false);
      return

    }

    else if (form.password.length<8){
      Alert.alert("Password too short","The characters in your password must be more than 8 ")
      setIsSubmitting(false);
      return
    }
    


    else{
        const userData = {
          name:form.userName,
          email:form.email,
          password:form.password
        }
        try {
          const response = await axios.post("http://192.168.43.241:1001/register",userData)
          console.log(response.data)
          if (response.data.status == 'ok'){
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            Alert.alert("Registered Successfully", `Welcome ${form.userName}`)
            router.replace('/(Tabs)/home')
          }
          else{
            Alert.alert(JSON.stringify(response.data))
          }
          

        } catch (error) {
          console.log(error);
    	    Alert.alert("Error", error.message);
        }
        finally{
          setIsSubmitting(false)
        }

    }
    
    
  }


  return (
    <SafeAreaView className={`${darkMode?'bg-slate-900':'bg-stone-100'} h-full w-full`}>
      <ScrollView>
        <View className='w-full justify-center h-[85vh]'>
            <Text className={`${darkMode?'text-white':'text-slate-900'} text-2xl  ml-4 w-full mb-48 top-48`}>
              Create a <Text className='font-Orbitron text-2xl text-lime-400'>Lift mobile</Text> account
            </Text>
            <View className='border-2 p-3 m-2 rounded-xl border-stone-400'>
              <FormField placeholdertext= 'Enter your name' title = 'Username' value ={form.userName} keyboardType = 'default' handlechangetext={(e)=>setForm({...form, userName:e})}/>

              <FormField placeholdertext= 'Enter your email' title = 'Email' value ={form.email} keyboardType = 'email-address' handlechangetext={(e)=>setForm({...form, email:e})}/>

              <FormField placeholdertext= 'Enter your password' title = 'Password'value ={form.password} keyboardType = 'default' handlechangetext={(e)=>setForm({...form, password:e})}/>

              <FormField placeholdertext= 'Confirm Password' title = 'Confirm Password' value ={confirmPass} keyboardType = 'default' handlechangetext={(e)=>{
                setConfirmPass(e)
                }}/>

              <View className='w-full flex-row justify-center'>
                <View className='mt-10 w-28'>
                  <Button title ='Sign Up' handlepress = {submit}/>
                </View>
              </View>
              <View className='mt-10'>
                <Link href='/(Signup)/signin' className='text-xl underline underline-offset-2 text-center text-stone-400'>
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