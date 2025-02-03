import { View, Text,SafeAreaView, TextInput,Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Categories from '../HomeComponent/Categories'
import Bestselling from '../HomeComponent/BestSelling'
import ProfileImg from './icons/Headshot.jpg'
import HeaderCar from '../../assets/images/sports-car-header2.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons/faLocationPin'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { AppContext,AppProvider } from '../Context'
import { useContext } from "react";




const Home = () => {
  const {darkMode, setDarkMode } = useContext(AppContext)
  return (
    <ScrollView className={` flex-1`}>
     <SafeAreaView className={`flex-1 items-center font-Ubunturegular ${darkMode? 'bg-slate-900' : 'bg-stone-100'}`}>
      <View className={`bg-slate-900 ${darkMode?"border-b-2 border-white":"border-0"} py-6 roundex-b-3xl items-center w-full px-3`}>
        <View className='flex-row justify-between items-center px-4 py-6 w-full'>
          <Image source={ProfileImg} resizeMode='contain' className='h-4 w-5  border-white border-[1px] rounded-full' style={{width:50,height:50}}/>
          <View className='justify-center items-center flex-row gap-1'>
            <FontAwesomeIcon icon={faLocationPin} size={20} color='#ffffff'/>
            <Text
           className='text-center text-sm text-white font-Ubunturegular'> 
            Lagos, Ikeja
            </Text>

          </View>

          <TouchableOpacity onPress={()=>{
            console.log('switch')
            setDarkMode(prevMode => !prevMode)}
            }>
              <FontAwesomeIcon icon={faSun} size={20} color='#ffffff'/> 
          </TouchableOpacity>

        </View>
        <TextInput
          placeholder='Search' placeholderTextColor='#000000' className='w-full  px-4 rounded-full text-sm text-black shadow-stone-700 font-Ubunturegular bg-white shadow-xs'/>

        {/* tagline    */}
        <View className='h-36 w-full rounded-3xl mt-7'>
          <Text className='text-lg p-4 w-4/6 font-Ubunturegular text-white' >Drive It Your Way: Rent, Share, Explore ...</Text>
          <View className='flex justify-end flex-row w-full'>
          <Image source={HeaderCar} className='w-5/6 -top-14 -right-4 ' resizeMode='contain'/>
          </View>
        </View>

      </View>

      <View className='mt-16 flex flex-row justify-between w-[90%]'>
          <Text className={`${darkMode?'text-white':'text-slate-900'} text-xl font-Ubuntubold`}>
            Categories
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size={20} color={darkMode?'#ffffff':'#0f172a'}/>
        </View>

      <Categories/>
      
      <View className= {`w-full my-6 ${darkMode?"bg-white":""}`}  style={{height:1}} />
      <View className='w-full px-4 py-10 rounded-t-3xl bg-slate-900'>
        <View className='flex flex-row justify-between w-full' style={{marginBottom:5}}>
          <Text className='text-white text-xl mb-3 font-Ubuntubold' >
          Trending Cars 
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size={20} color='#ffffff'/>
        </View>
        <Bestselling/>
      </View>


      
    

      


        
    </SafeAreaView>
    <StatusBar backgroundColor='#151415' style='light'/>
   </ScrollView>
  )
}

export default Home