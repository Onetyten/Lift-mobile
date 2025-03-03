import { View, Text, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { router } from 'expo-router';
import { AppContext,CarListing } from '../Context';

interface propItems{
    carListings:Array<object>
    detailsIndex:number
    name:string
}



const DetailHeader:React.FC<propItems> = (props) => {
    const context = useContext(AppContext);

    if (!context) {
        return null; // Or render an error message
    }
    const { carListings, detailsIndex, setBookmark } = context;
    const {name} = props
  return (
    <View className='bg-slate-900' style={{paddingTop:StatusBar.currentHeight}}>
        <View className='flex-row justify-between px-4'>
        <TouchableOpacity style={{padding:10, paddingHorizontal:12 ,borderRadius:100,backgroundColor:'#ffffff88'}} onPress={()=>{router.back()}} >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color='#ffffff'/>  
        </TouchableOpacity>
        

        <Text className='text-white font-Ubunturegular text-xl'>
            {name}
        </Text>
        <TouchableOpacity className='border-[1px] border-white' style={{padding:10,borderRadius:100}} onPress={()=>{
            setBookmark((prevBookmark:CarListing[]) =>{
                if (!prevBookmark.some((bookmark:CarListing)=>bookmark.id === carListings[detailsIndex].id))
                {return[...prevBookmark ,carListings[detailsIndex]]}
                else{
                    Alert.alert("Added to cart","The vehicle selected has already been added to cart previously")
                }
                return prevBookmark
                
            })
        }}>
            <FontAwesomeIcon icon={faCartShopping} size={20} color='#ffffff'/>  
        </TouchableOpacity>

        </View>
    </View>
  )
}

export default DetailHeader