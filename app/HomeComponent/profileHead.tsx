import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { toggleDarkMode } from '@/redux/state/darkModeSlice'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch } from 'react-redux';

interface propType{
    darkMode:boolean
}

const ProfileHead = (prop:propType) => {
    const dispatch = useDispatch()
    const {darkMode} = prop
  return (

        <View className='flex-row justify-between items-center px-4 py-6 w-full'>
          <Image source={require('../../assets/images/General/Headshot.jpg')} resizeMode='contain' className={` ${darkMode?'border-white ':'border-midnightBlue'} border-[1px] rounded-full`} style={{width:45,height:45}}/>
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
  )
}

export default ProfileHead



