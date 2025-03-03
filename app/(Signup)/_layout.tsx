import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'

const AcctLayout:React.FC = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
        name='signin'
        options={{headerShown:false}}
        /> 
        <Stack.Screen 
        name='signup'
        options={{headerShown:false}}
        /> 
      </Stack>
      <StatusBar backgroundColor='#151415' style='light'/>
    
    </>
  )
}

export default AcctLayout