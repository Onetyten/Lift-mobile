import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const DetailRent = (props) => {
  const {price, openPopUp} = props
  return (
    <View>
        <View className='flex-row justify-between mx-4 mt-10 items-center p-4 border-slate-900 rounded-lg' style={{borderWidth:1}}>
            <Text className='text-slate-900 font-Handlee text-2xl'>
            {price}<Text className='text-lg'> / day</Text>
            </Text>
            <TouchableOpacity className='bg-slate-900 p-3 rounded-md' onPress={openPopUp}>
              <Text className='text-slate-100 text-sm font-QuickSand'>
                  Rent Now
              </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailRent