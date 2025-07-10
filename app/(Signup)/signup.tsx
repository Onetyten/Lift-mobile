import { View, Text, SafeAreaView, ScrollView, Alert,Image } from 'react-native'
import React,{useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../Components/FormField'
import Button  from '../Components/Button'
import { Link, router,Redirect } from 'expo-router'
import { AppContext,AppProvider } from '../../provider/Context'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';


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
          

        } catch (error:unknown) {
          if (error instanceof Error){
            console.log(error);
    	      Alert.alert("Error", error.message);
          }
          else{
            console.log(error);
    	      Alert.alert("Error", "Error unknown Reload the app");
          }
          
        }
        finally{
          setIsSubmitting(false)
        }

    }
    a
    
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
                  Create account
                </Text>

                <View className='gap-1'>
                  <FormField placeholdertext= 'Name' icon={<FontAwesome5 name="user-circle" size={24} color="#374151" />}  value ={form.userName} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, userName:e})}/>

                  <FormField placeholdertext= 'E-mail' icon={<Fontisto name="email" size={24} color="#374151" />} value ={form.email} keyboardType = 'email-address' handlechangetext={(e:string)=>setForm({...form, email:e})}/>

                  <FormField placeholdertext= 'Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={form.password} keyboardType = 'default' handlechangetext={(e:string)=>setForm({...form, password:e})}/>

                  <FormField placeholdertext= 'Confirm Password' icon={<AntDesign name="lock" size={24} color="#374151" />} value ={confirmPass} keyboardType = 'default' handlechangetext={(e:string)=>{
                    setConfirmPass(e)
                    }}/>

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