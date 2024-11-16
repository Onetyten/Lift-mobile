import { View, Text,SafeAreaView, TextInput,Image } from 'react-native'
import React from 'react'
import ProfileImg from './icons/Headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin'


const Home = () => {
  return (
    <SafeAreaView className='bg-dark-200 flex-1 items-center'>
      <View className='flex-row justify-between items-center px-4 py-6 w-full'>
        <Image source={ProfileImg} resizeMode='contain' className='h-5 w-5  border-primary border-2 rounded-full' style={{width:50,height:50}}/>
        <View className='justify-center items-center flex-row gap-4'>
          <FontAwesomeIcon icon={faLocationPin} size={30} color='#ff934f'/>
          <Text
          placeholder='Search' placeholderTextColor='#a4816c' className='text-center text-xl text-primary'> 
          Lagos, Ikeja
          </Text>

        </View>

        
        <FontAwesomeIcon icon={faBell} size={30} color='#ff934f'/>

      </View>
      <TextInput
        placeholder='Search' placeholderTextColor='#a4816c' className='w-[95%] border-primary border-2 p-4 rounded-3xl text-xl text-primary shadow-xl shadow-primary bg-gradient-to-r from-dark-100 to-dark-200 backdrop-blur-md'/>
      <View className='h-48 w-[95%] bg-primary  rounded-3xl mt-7'>

      </View>
        
    </SafeAreaView>
  )
}

export default Home