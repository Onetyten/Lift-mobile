import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link,Redirect,router } from 'expo-router'
import { AppContext,AppProvider } from '../Context'


const Signin = () => {
  const {form,setForm} = useContext(AppContext)
  const submit = ()=>{
    console.log('Hello world')
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
                  <Button title ='Sign In' handlepress = {()=>{router.push('/(Tabs)/home')}}/>
                
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