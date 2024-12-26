import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'

import { StarRatingDisplay } from 'react-native-star-rating-widget';


const BestSellingCard = (props) => {
    const {name,path,price,score,category} = props
    return (
        <TouchableOpacity>
            <View className='w-80 mr-6 object-contain'>
                <View className='object-contain rounded-md overflow-hidden'>
                    <ImageBackground source={typeof path === 'string'? {uri: path}:path} className='w-full h-80 justify-center items-center bg-primary rounded-2xl bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
                        <View className=' bg-primary w-full h-full opacity-25 absolute'>
                            
                        </View>
                        <View className='absolute top-2 left-3'>
                            <Text className=' text-xl text-primary font-QuickSand'>{category}</Text>
                        </View>
                        <View className='absolute bottom-2 right-3 flex-row items-center gap-2 '>
                            <FontAwesomeIcon icon={faBookmark} size={20} color='#ffffff'/>  
                        </View>
                    </ImageBackground>
                </View>
                <View className='flex-row justify-between w-full'>
                    <View className='items-start justify-start flex-col'>
                        <Text className='w-full mt-3 text-lg text-primary font-QuickSand'>{name}</Text>
                        <Text className='w-full mt-3 text-sm text-primary font-Handlee'>N {price}</Text>
                    </View>
                    <View>
                        <View className='rounded-md border-primary p-2 mt-3' style={{borderWidth:1}}>
                            <Text className='w-full text-xs text-primary font-QuickSand'>{score}<FontAwesomeIcon icon={faStar} size={13} color='#ff934f'/></Text>
                             
                        </View>
                    </View>

                </View>

        
            </View>
        </TouchableOpacity>
        
          )
}

export default BestSellingCard