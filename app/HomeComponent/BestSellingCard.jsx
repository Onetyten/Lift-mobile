import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'


const BestSellingCard = (props) => {
    const {name,path,price} = props
    return (
        <TouchableOpacity>
            <View className='w-80 mr-6 rounded-2xl object-contain h-96  overflow-hidden'>
                <ImageBackground source={path} className='w-full h-80 justify-center items-center bg-primary bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
                    <View className=' bg-primary w-full h-full opacity-25 absolute'>
                    </View>
                    <View className='absolute top-2 left-3'>
                        <FontAwesomeIcon icon={faBookmark} size={20} color='#ffffff'/>  
                    </View>
                    <View className='absolute bottom-2 right-3 flex-row items-center gap-2 '>
                        <Text className='text-md font-Handlee border-b-2 border-primary  bg-primary text-white rounded-sm px-2 '>{price}</Text>
                        <FontAwesomeIcon icon={faTags} size={20} color='#ff934f'/>
                    </View>
                </ImageBackground>
                <Text className='w-full text-center mt-3 text-md text-primary font-QuickSand'>{name}</Text>

        
            </View>
        </TouchableOpacity>
        
          )
}

export default BestSellingCard