import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

interface PropItems{
  title:string
  handlepress:()=>void
  

}

const Button:React.FC<PropItems> = (props) => {
    const {title,handlepress} = props
  return (
    <TouchableOpacity onPress={handlepress}>
              <Text className="text-xl p-3 px-4 text-center rounded-sm bg-primary font-Inter-regular w-full">   
               {title}
              </Text>
    </TouchableOpacity> 
  )
}

export default Button