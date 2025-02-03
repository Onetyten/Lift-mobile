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
                        <View className=' bg-slate-900 w-full h-full opacity-25 absolute'>
                            
                        </View>
                        <View className='absolute top-2 left-1'>
                            <Text className=' text-sm text-white font-Ubunturegular'>{name}</Text>
                        </View>
                        
                    </ImageBackground>
                </View>
                <View className='flex-row justify-center w-full'>
                    <View className='items-center justify-between flex-row w-full'>   
                            <Text className='mt-3 text-xs text-slate-900 font-Ubunturegular'>N {price}</Text>

                            <TouchableOpacity  onPress={()=>{setBookmark(prevBookmark =>{
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
                            {/* <Text className='mt-3 text-xs text-slate-900 font-Handlee'>N {price}</Text> */}

                    </View>
                </View>

        
            </View>
        </TouchableOpacity>
        
          )
}

export default CartItem 