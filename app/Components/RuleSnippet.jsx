import { View, Text } from 'react-native'
import React from 'react'

const RuleSnippet = (props) => {
    const { Header,rules,intro} = props
  return (
    <View>
        <View style={{height:10}}></View>
        <View className='bg-primary my-4 rounded-xl p-3  '>
            <Text className='text-dark-100 text-xl font-Handlee'>{Header}</Text>
            <Text className='text-dark-100 text-md font-QuickSand'>{intro}</Text>
            <View className='pl-14'>
                {rules.map((item,index)=>{
                    return(
                        <Text className='text-dark-100 ml-14 mt-5 text-sm font-QuickSand' key={index} >{item}</Text>
                    )
                })}
            </View>

        </View>
        <View style={{height:10}}>

        </View>
      
    </View>
  )
}

export default RuleSnippet