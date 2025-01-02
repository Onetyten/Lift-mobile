import { View, Text,Image } from 'react-native'
import React from 'react'

const Review = (props) => {
    const {comments} = props
  return (
    <View>
        <Text className='text-primary font-Handlee ml-4 mt-7 text-2xl'>
            Reviews
        </Text>

        <View className='border-primary ml-4 rounded-lg'  style={{borderWidth:1}} >
        {comments.map((item,index)=>{
            return(
            
            <View className='p-4'  key={index}>
            <View className='flex-row items-center'>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCuCOisgxyOypyBi-hRYYV2Onv7KVI6QTVA&s'}} style ={{}} width={35} height={35} resizeMode='contain' className='rounded-full '/>
                <Text className='text-primary font-Handlee ml-4 text-sm'>Anonymous</Text>
            </View>
                <Text className='text-primary font-QuickSand ml-4 mt-3 text-md' key={index}>{item}</Text>
            </View>
            
            )
        })}
        </View>
    </View>
  )
}

export default Review