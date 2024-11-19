import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoriesCards = (props) => {
    const {name,path} = props

  return (
<TouchableOpacity>
    <View className='w-40 mr-6 rounded-2xl object-contain h-52  overflow-hidden'>
        <ImageBackground source={path} className='w-full h-40 justify-center items-center bg-primary bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
            <View className=' bg-primary w-full h-full opacity-25 absolute'>
            </View>
        </ImageBackground>
        <Text className='w-full text-center text-2xl text-primary'>{name}</Text>

    </View>
</TouchableOpacity>

  )
}

export default CategoriesCards