import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = (props) => {
    const {title,handlepress} = props
  return (
    <TouchableOpacity onPress={handlepress}>
              <Text className="text-xl p-3 px-4 text-center rounded-md font-Handlee  bg-primary font-extrabold w-full">   
               {title}
              </Text>
    </TouchableOpacity> 
  )
}

export default Button