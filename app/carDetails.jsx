import { View, Text, StatusBar, ScrollView, TouchableOpacity ,Image } from 'react-native'
import React,{useContext,useState} from 'react'
import {AppContext,AppProvider} from './Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faHeart} from '@fortawesome/free-solid-svg-icons/faHeart'
import { faStar} from '@fortawesome/free-solid-svg-icons/faStar'
import { faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { router } from 'expo-router';
import DetailHeader from './Components/DetailHeader.jsx';
import DetailProfile from './Components/DetailProfile.jsx';
import DetailScroll from './Components/DetailScroll.jsx';
import DetailRent from './Components/DetailRent.jsx';
import Review from './Components/Review.jsx';






const CarDetails = () => {
  const {carListings,CurrentCategory,detailsIndex,setDetailsIndex} = useContext(AppContext)
  return (
    <ScrollView className = {`bg-dark-200`}>
      <View style={{paddingTop:StatusBar.currentHeight}}>

         < DetailHeader name = {carListings[detailsIndex].name} />

         <Image source={{uri: carListings[detailsIndex].path}} className='w-full h-80 p-8 justify-center items-center bg-primary rounded-2xl bg-blend-multiply' style={{backgroundBlendMode:'multiply',marginTop:40}} />

         <Text className='text-primary font-QuickSand text-xl mt-6 pl-2'>
            {carListings[detailsIndex].name.toUpperCase()}
         </Text>

          <View className=' rounded-lg mt-10 mx-4 justify-between flex-wrap'>
          <View className='flex-row flex-wrap justify-evenly'>
            <DetailScroll/>
  
           </View>
            <Text className='font-QuickSand text-md w-full text-left text-primary mt-6'>
                {carListings[2].description}
            </Text>

          </View>
         <DetailProfile/>

          <DetailRent  price = {carListings[detailsIndex].rentalPricePerDay} />

          <Review comments = {carListings[detailsIndex].comments}/>



          <View style={{height:80}}>

          </View>


      </View>
    </ScrollView>

  )
}

export default CarDetails