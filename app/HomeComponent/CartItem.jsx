import { View, Text, ImageBackground, TouchableOpacity,Alert } from 'react-native'
import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { router } from 'expo-router'
import {AppContext,AppProvider} from '../Context.jsx'
 

const CartItem = (props) => {
    const {carListings,detailsIndex,setDetailsIndex,bookmark,setBookmark} = useContext(AppContext)
    const {name,path,price,score,category,id} = props
    return (
        <TouchableOpacity onPress={()=>{
            
            router.push('/carDetails')
            }}>
            <View className='w-28 mx-2 mb-7 object-contain'>
                <View className='object-contain rounded-md overflow-hidden'>
                    <ImageBackground source={typeof path === 'string'? {uri: path}:path} className='w-full h-28 justify-center items-center bg-primary rounded-2xl bg-blend-multiply'style={{backgroundBlendMode:'multiply'}} >
                        <View className=' bg-primary w-full h-full opacity-25 absolute'>
                            
                        </View>
                        <View className='absolute top-2 left-1'>
                            <Text className=' text-md text-white font-QuickSand'>{name}</Text>
                        </View>
                        <View className='absolute bottom-2 right-3 flex-row items-center gap-2 '>
                        <TouchableOpacity className='' onPress={()=>{setBookmark(prevBookmark =>{
                            setDetailsIndex(id)
                            const isBookmarked = prevBookmark.some(bookmark=>bookmark.id === carListings[detailsIndex].id)
                            if(isBookmarked) 
                            {
                                return prevBookmark.filter(
                                    (bookmark) => bookmark.id !== carListings[detailsIndex].id
                                );
                            }

                            return prevBookmark
                        })
                        }}>
                            <FontAwesomeIcon icon={faCircleXmark} size={20} color='#dc2626'/>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View className='flex-row justify-between w-full'>
                    <View className='items-start justify-start flex-col'>
                        {/* <Text className='w-full mt-3 text-lg text-primary font-QuickSand'>{name}</Text> */}
                        <Text className='w-full mt-3 text-xs text-primary font-Handlee'>N {price}</Text>
                    </View>
                </View>

        
            </View>
        </TouchableOpacity>
        
          )
}

export default CartItem 