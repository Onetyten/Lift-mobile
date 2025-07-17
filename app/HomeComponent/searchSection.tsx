import { View, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface propType{
    darkMode:boolean
}

const SearchSection = (props:propType) => {
    const {darkMode} = props
  return (
        <View className={`w-[95%] flex-row px-4 my-2 h-14 rounded-lg text-sm text-midnightBlue font-Inter-regular relative ${darkMode?'bg-gray-500/30':'bg-midnightBlue/10'} shadow-xs justify-center items-center`}>
            <TouchableOpacity className='pl-3'>
                <AntDesign name="search1" size={24} color={`${darkMode?'#ffffff':'#0F0E17'}`}  />
            </TouchableOpacity>
            
            <TextInput placeholder='Search' placeholderTextColor='#374151' className='pl-3 w-full text-lg text-midnightBlue  font-Inter-regular bg-transparent'/>
            
            <TouchableOpacity className='right-2 absolute'>
                <AntDesign name="close" size={24}  color={`${darkMode?'#4b5563':'#0F0E17'}`}  />
            </TouchableOpacity>
        </View>
  )
}

export default SearchSection