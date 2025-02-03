import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import {BlurView} from 'expo-blur'

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { router } from 'expo-router'
import {AppContext,AppProvider} from '../Context.jsx'


const BestSellingCard = (props) => {
    const {carListings,detailsIndex,setDetailsIndex} = useContext(AppContext)
    const {name,path,price,score,category,id} = props
    return (
        <TouchableOpacity onPress={()=>{
            setDetailsIndex(id)
            router.push('/carDetails')
            }}>
            <View className='w-[21rem] object-contain'>
                <View className='object-contain rounded-md overflow-hidden'>
                    <ImageBackground source={typeof path === 'string'? {uri: path}:path} className='h-96 w-[21rem] justify-center items-center rounded-2xl bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
                        <View className='absolute top-2 left-3'>
                            <Text className=' text-xl text-white font-Ubunturegular'>{category}</Text>
                        </View>
                        <View className='absolute top-2 right-3 flex-row items-center gap-2 '>
                            <FontAwesomeIcon icon={faBookmark} size={20} color='#ffffff'/>  
                        </View>

                        
                        <View className='flex-row absolute  bottom-0 justify-between w-full'>
                            <BlurView  style={{position: 'absolute',top:0,left: 0,right:0,bottom:0,inset:0}} intensity = {100} tint='dark' backgroundBlendMode/>
                            <View className='items-start pl-4 pb-3 justify-start flex-col'>
                                <Text className='w-full mt-3 text-lg text-white font-Ubunturegular'>{name}</Text>
                                <Text className='w-full mt-3 text-sm text-white font-Ubuntubold'>N {price}</Text>
                            </View>
                            <View>
                                <View className='p-2 mt-3'>
                                    <Text className='w-full text-xs text-white font-Nunito'>{score}<FontAwesomeIcon icon={faStar} size={13} color='#f5ed31'/></Text>
                                    
                                </View>
                            </View>

                        </View>




                    </ImageBackground>
                    
                </View>


        
            </View>
        </TouchableOpacity>
        
          )
}

export default BestSellingCard