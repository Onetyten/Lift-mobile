import { View, Text,SafeAreaView, TextInput,Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Categories from '../HomeComponent/Categories'
import Bestselling from '../HomeComponent/BestSelling'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '@/redux/state/darkModeSlice'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RootState } from '@/redux/store'
import ProfileHead from '../HomeComponent/profileHead'
import SearchSection from '../HomeComponent/searchSection'
import TagLine from '../HomeComponent/tagLine'




const Home:React.FC = () => {
  const darkMode = useSelector((state:RootState)=>state.darkmode.darkmode)
  const dispatch = useDispatch()
  return (
    <ScrollView className={` flex-1`}>
     <SafeAreaView className={`flex-1 items-center font-Inter-regular ${darkMode? 'bg-midnightBlue' : 'bg-white'}`}>
      <View className={` ${darkMode?"bg-midnightBlue border-b-[1px] border-white":"bg-white border-midnightBlue border-b-2"} py-6 roundex-b-3xl items-center w-full px-3`}>
        <ProfileHead darkMode={darkMode}/>
        <SearchSection darkMode={darkMode}/>
        <TagLine darkMode={darkMode}/>
      </View>


      {/* category section */}
      <View className='mt-16 flex flex-row justify-between w-[90%]'>
          <Text className={`${darkMode?'text-white':'text-midnightBlue'} text-2xl font-Inter-semibold`}>
            Categories
          </Text>
          <AntDesign name="arrowright" size={20} color={darkMode?'#ffffff':'#0f172a'}/>
      </View>

      <Categories darkMode={darkMode}/>
      

      {/* trending car section */}
      <View className='w-full px-4 py-10 pt-6 '>
        <View className='flex flex-row justify-between w-full' style={{marginBottom:5}}>
          <Text className={`${darkMode?'text-white':'text-midnightBlue'} text-2xl font-Inter-semibold`} >
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