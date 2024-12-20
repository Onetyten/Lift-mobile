import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext,useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link,Redirect,router } from 'expo-router'
import { AppContext,AppProvider } from '../Context'
import {Authenticate} from '../../lib/appwrite'



const Signin = () => {
  const {form,setForm} = useContext(AppContext)
  const [isSubmitting,setIsSubmitting] = useState(false)
  const submit =async  ()=>{
    console.log("pressed")
    if (!form.email || !form.password){
          console.log("not here")
          Alert.alert("Invalid Information","Please fill in the required fields")
        }
    else{
      try {
        const user = await Authenticate(form.email,form.password)
        console.log("User logged in")
        router.replace('/(Tabs)/home')
      } catch (error) {
         Alert.alert("Error",error.message)
      }
    }
  }



  return (
    <SafeAreaView className='bg-dark-200 h-full w-full'>
      <ScrollView>
        <View className='w-full justify-center h-[85vh]'>
            <Text className='text-2xl text-dark-100 ml-4 w-full mb-48 top-32'>
              Log in to <Text className='font-logam text-3xl text-primary'>Rideshare</Text>
            </Text>
            <View className='border-2 p-3 m-2 rounded-xl border-primary'>
              <FormField placeholdertext= 'Enter your email' title = 'Email' value ={form.email} keyboardType = 'email-address' handlechangetext={(e)=>setForm({...form, email:e})}/>
              <FormField placeholdertext= 'Enter your password' title = 'Password'value ={form.password} keyboardType = 'default' handlechangetext={(e)=>setForm({...form, password:e})} />
              <View className='w-full flex-row justify-center'>
                <View className='mt-10 w-28'>
                  <Button title ='Sign In' handlepress = {submit}/>
                
                </View>
              </View>
              <View className='mt-10'>
                <Link href='/(Signup)/signup' className='text-xl underline underline-offset-2 text-center text-primary'>
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