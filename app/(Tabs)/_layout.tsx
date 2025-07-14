import { View, Text,Image,ImageSourcePropType,StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Tabs,Redirect } from 'expo-router'
import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector } from 'react-redux';

interface TabIconProps {
  icon: ReactNode
  color: string
  name: string
  focused: boolean
}

// const style = StyleSheet.create({
//   container:
// })




const TabIcon:React.FC<TabIconProps> = ({icon,color,name,focused}) => {
  return (
    <View className='items-center justify-center gap-2'>
      {icon}
    </View>
  )
}


const TabLayout = () => {
 const darkMode = useSelector((state)=>(state as any).darkmode.darkmode)
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarActiveTintColor:'#FFF',
        tabBarInactiveTintColor:'#373637',
        tabBarStyle:{
          backgroundColor:'#0F0E17',
          height:60,
          borderTopWidth:0
          
        }

        }} >


        <Tabs.Screen name='home' options={{
        headerShown:false,
        title:'Home',
         tabBarIcon:({color,focused})=>(
          <TabIcon 
            icon={<Octicons name="home" size={24} color={color} />}
            color={color}
            name="Home"
            focused={focused}
          />
         )
        }}/>
        
        <Tabs.Screen name='bookmark' options={{
          headerShown:false,
          title:'Bookmark',
          tabBarIcon:({color,focused})=>(
            <TabIcon 
              icon={<Fontisto name="favorite" size={24} color={color} />}
              color={color}
              name="Bookmark"
              focused={focused}
            />
           )}}/>
        <Tabs.Screen name='create' options={{
          headerShown:false,
          title:'Create',
          tabBarIcon:({color,focused})=>(
            <TabIcon 
              icon={<Ionicons name="create-outline" size={24} color={color} />}
              color={color}
              name="Create"
              focused={focused}
            />
           )}}/>
           <Tabs.Screen name='profile' options={{
          headerShown:false,
          title:'Profile',
          tabBarIcon:({color,focused})=>(
            <TabIcon 
              icon={<AntDesign name="user" size={24} color={color} />}
              color={color}
              name="Profile"
              focused={focused}
            />
           )}}/>

      </Tabs>
    
    </>
  )
}

export default TabLayout