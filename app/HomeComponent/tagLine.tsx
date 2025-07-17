import { View, Text,Image } from 'react-native'
import React from 'react'

interface propType{
    darkMode:boolean
}

const TagLine = (props:propType) => {
    const {darkMode} = props
  return (
        <View className='h-36 w-full rounded-3xl mt-7'>
          <Text className={`text-2xl p-4 py-1 w-4/6 font-Inter-regular ${darkMode?'text-white':'text-midnightBlue'} `} >Drive It Your Way</Text>
          <Text className={`text-2xl p-4 py-1 w-4/6 font-Inter-regular ${darkMode?'text-white':'text-midnightBlue'} `} >Rent, Share, Explore ...</Text>

          <View className='flex justify-end flex-row w-full'>
          <Image source={require('../../assets/images/sports-car-header2.png')} className='w-5/6 -top-14 -right-4 ' resizeMode='contain'/>
          </View>
        </View>
  )
}

export default TagLine