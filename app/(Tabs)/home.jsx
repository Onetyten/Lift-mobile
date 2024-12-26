import { View, Text,SafeAreaView, TextInput,Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Categories from '../HomeComponent/Categories'
import Bestselling from '../HomeComponent/BestSelling'
import ProfileImg from './icons/Headshot.jpg'
import HeaderCar from '../../assets/images/sports-car-header.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'


const Home = () => {
  return (
   <ScrollView className='bg-dark-200 flex-1'>
     <SafeAreaView className=' flex-1 items-center pt-6 font-QuickSand
    
    '>
      <View className='flex-row justify-between items-center px-4 py-6 w-full'>
        <Image source={ProfileImg} resizeMode='contain' className='h-4 w-5  border-primary border-2 rounded-full' style={{width:50,height:50}}/>
        <View className='justify-center items-center flex-row gap-1'>
          <FontAwesomeIcon icon={faLocationPin} size={20} color='#ff934f'/>
          <Text
          placeholder='Search' placeholderTextColor='#a4816c' className='text-center text-sm text-primary font-QuickSand'> 
          Lagos, Ikeja
          </Text>

        </View>

        
        <FontAwesomeIcon icon={faBell} size={20} color='#ff934f'/>

      </View>
      <TextInput
        placeholder='Search' placeholderTextColor='#a4816c' className='w-[90%] border-primary border-2 px-4 rounded-full text-sm text-primary shadow-xl shadow-primary font-QuickSand'/>

      {/* tagline    */}
      <View className='h-48 w-[90%] bg-primary rounded-3xl mt-7 overflow-hidden'>
        <Text className='text-lg p-4 w-4/6 font-QuickSand text-dark-200' >Drive It Your Way: Rent, Share, Explore ...</Text>
        <View className='flex justify-end flex-row w-full'>
         <Image source={HeaderCar} className='w-5/6 -top-20 ' resizeMode='contain'/>
        </View>
      </View>
      <View className='mt-7 flex flex-row justify-between w-[90%]'>
        <Text className='text-primary text-xl font-Handlee'>
          Categories
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size={20} color='#ff934f'/>
      </View>

      <Categories/>
      <View className='bg-primary w-full my-14' style={{height:1,marginVertical:40}} />
      <View className='flex flex-row justify-between w-[90%]' style={{marginBottom:5}}>
        <Text className='text-primary text-xl font-Handlee' >
        Trending Cars 
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size={20} color='#ff934f'/>
      </View>
      <Bestselling/>

      
    

      


        
    </SafeAreaView>
    <StatusBar backgroundColor='#151415' style='light'/>
   </ScrollView>
  )
}

export default Home