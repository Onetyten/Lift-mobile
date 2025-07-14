import { View, Text,SafeAreaView, TextInput,Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Categories from '../HomeComponent/Categories'
import Bestselling from '../HomeComponent/BestSelling'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from "react";
import { toggleDarkMode } from '@/redux/state/darkModeSlice'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur'
import { RootState } from '@/redux/store'




const Home:React.FC = () => {
  const darkMode = useSelector((state)=>(state as any).darkmode.darkmode)
  const dispatch = useDispatch()
  return (
    <ScrollView className={` flex-1`}>
     <SafeAreaView className={`flex-1 items-center font-Inter-regular ${darkMode? 'bg-midnightBlue' : 'bg-white'}`}>
      <View className={` ${darkMode?"bg-midnightBlue border-b-[1px] border-white":"bg-white border-midnightBlue border-b-2"} py-6 roundex-b-3xl items-center w-full px-3`}>
        <View className='flex-row justify-between items-center px-4 py-6 w-full'>
          <Image source={require('./icons/Headshot.jpg')} resizeMode='contain' className={` ${darkMode?'border-white ':'border-midnightBlue'} border-[1px] rounded-full`} style={{width:45,height:45}}/>
          <View className='justify-center items-center flex-row gap-1'>
            <Entypo name="location-pin" size={20} color={`${darkMode?'#ffffff':'#0F0E17'}`} />
            <Text
           className={`text-center text-md ${darkMode?'text-white':'text-midnightBlue'} font-Inter-regular`}> 
            Lagos, Ikeja
            </Text>

          </View>

          <TouchableOpacity className={`relative ${darkMode?'':'bg-midnightBlue/10 ' } p-3 rounded-full`} 
            onPress={()=>{
              dispatch(toggleDarkMode())
            }
            }>
              <FontAwesome5 name="bell" size={20} color={`${darkMode?'#ffffff':'#0F0E17'}`} />
              <View className='text-white bg-red-500 rounded-full absolute w-4 h-4 left-0 bottom-0 justify-center items-center'>
                <Text className='text-white text-center text-xs'>3</Text>
              </View>
              
          </TouchableOpacity>

        </View>
        <View className={`w-[95%] flex-row px-4 my-2 h-14 rounded-lg text-sm text-midnightBlue font-Inter-regular relative ${darkMode?'bg-gray-500/30':'bg-midnightBlue/5'} shadow-xs justify-center items-center`}>
            <TouchableOpacity className='pl-3'>
                <AntDesign name="search1" size={24} color={`${darkMode?'#ffffff':'#0F0E17'}`}  />
            </TouchableOpacity>
            
            <TextInput placeholder='Search' placeholderTextColor='#d1d5db' className='pl-3 w-full text-lg text-midnightBlue font-Inter-regular bg-transparent'/>
            
            <TouchableOpacity className='right-2 absolute'>
                <AntDesign name="close" size={24}  color={`${darkMode?'#4b5563':'#0F0E17'}`}  />
            </TouchableOpacity>
        </View>
        

        {/* tagline    */}
        <View className='h-36 w-full rounded-3xl mt-7'>
          <Text className={`text-2xl p-4 py-1 w-4/6 font-Inter-regular ${darkMode?'text-white':'text-midnightBlue'} `} >Drive It Your Way</Text>
          <Text className={`text-2xl p-4 py-1 w-4/6 font-Inter-regular ${darkMode?'text-white':'text-midnightBlue'} `} >Rent, Share, Explore ...</Text>

          <View className='flex justify-end flex-row w-full'>
          <Image source={require('../../assets/images/sports-car-header2.png')} className='w-5/6 -top-14 -right-4 ' resizeMode='contain'/>
          </View>
        </View>

      </View>

      <View className='mt-16 flex flex-row justify-between w-[90%]'>
          <Text className={`${darkMode?'text-white':'text-midnightBlue'} text-2xl font-Inter-semibold`}>
            Categories
          </Text>
          <AntDesign name="arrowright" size={20} color={darkMode?'#ffffff':'#0f172a'}/>
      </View>

      <Categories/>
      
      <View className='w-full px-4 py-10 rounded-t-3xl bg-midnightBlue'>
        <View className='flex flex-row justify-between w-full' style={{marginBottom:5}}>
          <Text className='text-white text-2xl mb-3 font-Inter-semibold' >
          Trending Cars 
          </Text>
         <AntDesign name="arrowright" size={20} color={darkMode?'#ffffff':'#0f172a'}/>
        </View>
        <Bestselling/>
      </View>


      
    

      


        
    </SafeAreaView>
    <StatusBar backgroundColor='#151415'
    //  barStyle={'light'}
     />
   </ScrollView>
  )
}

export default Home