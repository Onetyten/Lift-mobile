import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const DetailRent = (props) => {
  const {price} = props
  return (
    <View>
        <View className='flex-row justify-between mx-4 mt-10 items-center p-6 border-primary rounded-lg' style={{borderWidth:1}}>
            <Text className='text-primary font-Handlee text-2xl'>
            {price}<Text className='text-lg'> / day</Text>
            </Text>
            <TouchableOpacity className='bg-primary p-4 rounded-full'>
            <Text className='text-white font-QuickSand'>
                Rent Now
            </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailRent