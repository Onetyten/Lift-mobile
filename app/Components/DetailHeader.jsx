import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faHeart} from '@fortawesome/free-solid-svg-icons/faHeart'
import { router } from 'expo-router';

const DetailHeader = (props) => {
    const {name} = props
  return (
    <View>
        <View className='flex-row justify-between px-4'>
        <TouchableOpacity style={{padding:10, paddingHorizontal:12 ,borderRadius:100,backgroundColor:'#FF934F22'}} onPress={()=>{router.back()}} >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color='#ffffff'/>  
        </TouchableOpacity>
        

        <Text className='text-primary font-QuickSand text-xl'>
            {name}
        </Text>
        <TouchableOpacity className='border-2 border-primary' style={{padding:10,borderRadius:100}}>
            <FontAwesomeIcon icon={faHeart} size={20} color='#ffffff'/>  
        </TouchableOpacity>

        </View>
    </View>
  )
}

export default DetailHeader