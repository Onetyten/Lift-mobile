import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import {BlurView} from 'expo-blur'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { router } from 'expo-router'
import {AppContext,AppProvider} from '../../provider/Context'


interface propItem {
    name:string
    path:string
    price:number
    score:number
    category:string
    id:number
}

const BestSellingCard:React.FC<propItem> = (props) => {
    const context = useContext(AppContext);
        if (!context) return null;
    const {carListings,detailsIndex,setDetailsIndex} = context
    const {name,path,price,score,category,id} = props
    return (
        <TouchableOpacity onPress={()=>{
            setDetailsIndex(id)
            router.push('/carDetails')
            }}>
            <View className='w-[21rem] object-contain'>
                <View className='object-contain rounded-lg overflow-hidden'>
                    <ImageBackground source={typeof path === 'string'? {uri: path}:path} className='h-96 w-[21rem] justify-center items-center rounded-2xl bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
                        
                       

                        
                        <View className='flex-row absolute  bottom-0 justify-between w-full h-full'>


                            <BlurView  style={{position: 'absolute',top:0,left: 0,right:0,bottom:0,inset:0}} intensity = {60} tint='dark'/>



                            <View className='absolute w-full h-full justify-between items-center'>


                                <View className='flex-row w-full justify-between pl-8 pr-14 mt-6' >
                                    <View className='flex flex-row justify-center items-center gap-2'>
                                        <FontAwesome6 name="naira-sign" size={20} color="white" />
                                        <Text className='w-full text-3xl text-white font-Inter-semibold'>{price}</Text> 
                                    </View>



                                    <View className=' text-gray-300 pr-6'>
                                        <FontAwesomeIcon icon={faBookmark} size={24} color='#d1d5db'/>  
                                    </View>
                                </View>
                                

                                <View className='flex-row w-full items-center justify-between mb-6 px-5' >
                                    <View className='items-start justify-start flex-col'>
                                        <Text className='text-3xl text-white font-Inter-regular'>{name}</Text> 
                                    </View>
                                    <View>
                                        <View className=''>
                                            {/* <Text className='w-full text-xl text-white font-Nunito'>{score} <FontAwesomeIcon icon={faStar} size={14} color='#f5ed31'/></Text> */}
                                            
                                        </View>
                                    </View>
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