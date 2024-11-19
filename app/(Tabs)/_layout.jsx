import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import HomeIcon from './icons/home.png'
import ProfileIcon from './icons/profile.png'
import BookmarkIcon from './icons/bookmark.png'
import CreateIcon from './icons/plus.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'



const TabIcon = ({icon,color,name,focused}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image source={icon} resizeMode='contain' tintColor={color}  className='w-6 h-6'/>


    </View>
  )
}


const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarActiveTintColor:'#FFF',
        tabBarInactiveTintColor:'#373637',
        tabBarStyle:{
          backgroundColor:'#FF934F',
          height:40,
        }
        }} >


        <Tabs.Screen name='home' options={{
        headerShown:false,
        title:'Home',
         tabBarIcon:({color,focused})=>(
          <TabIcon 
            icon={HomeIcon}
            color={color}
            name="Home"
            focused={focused}
          />
         )
        }}/>
        <Tabs.Screen name='profile' options={{
          headerShown:false,
          title:'Profile',
          tabBarIcon:({color,focused})=>(
            <TabIcon 
              icon={ProfileIcon}
              color={color}
              name="Profile"
              focused={focused}
            />
           )}}/>
        <Tabs.Screen name='bookmark' options={{
          headerShown:false,
          title:'Bookmark',
          tabBarIcon:({color,focused})=>(
            <TabIcon 
              icon={BookmarkIcon}
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
              icon={CreateIcon}
              color={color}
              name="Create"
              focused={focused}
            />
           )}}/>

      </Tabs>
    
    </>
  )
}

export default TabLayout