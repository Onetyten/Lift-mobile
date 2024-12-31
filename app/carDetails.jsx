import { View, Text, StatusBar, ScrollView, TouchableOpacity ,Image } from 'react-native'
import React,{useContext,useState} from 'react'
import {AppContext,AppProvider} from './Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faHeart} from '@fortawesome/free-solid-svg-icons/faHeart'


const CarDetails = () => {
  const {carListings,CurrentCategory,detailsIndex,setDetailsIndex} = useContext(AppContext)
  return (
    <ScrollView className = {`bg-dark-200`}>
      <View style={{paddingTop:StatusBar.currentHeight}}>
        <View className='flex-row justify-between px-4'>
          <TouchableOpacity style={{padding:10, paddingHorizontal:12 ,borderRadius:100,backgroundColor:'#FF934F22'}}>
              <FontAwesomeIcon icon={faArrowLeft} size={20} color='#ffffff'/>  
          </TouchableOpacity>
       

          <Text className='text-primary font-QuickSand text-xl'>
            {carListings[detailsIndex].name}
          </Text>
          <TouchableOpacity className='border-2 border-primary' style={{padding:10,borderRadius:100}}>
              <FontAwesomeIcon icon={faHeart} size={20} color='#ffffff'/>  
          </TouchableOpacity>

        </View>
         <Image source={{uri: carListings[detailsIndex].path}} className='w-full h-80 p-8 justify-center items-center bg-primary rounded-2xl bg-blend-multiply' style={{backgroundBlendMode:'multiply',marginTop:40}} />

         <Text className='text-primary font-QuickSand text-xl mt-6 pl-2'>
            {carListings[detailsIndex].name.toUpperCase()}
          </Text>

          <Text className='text-primary font-QuickSand text-md w-full text-left pl-4 mt-6' style={{color:'#ffffff'}}>
            {carListings[detailsIndex].description}
          </Text>


      </View>
    </ScrollView>

  )
}

export default CarDetails