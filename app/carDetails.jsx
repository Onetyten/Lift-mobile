import { View, Text, StatusBar, ScrollView, TouchableOpacity ,Image, Modal, SafeAreaView } from 'react-native'
import React,{useContext,useState} from 'react'
import {AppContext,AppProvider} from './Context.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { router } from 'expo-router';
import DetailHeader from './Components/DetailHeader.jsx';
import DetailProfile from './Components/DetailProfile.jsx';
import DetailScroll from './Components/DetailScroll.jsx';
import DetailRent from './Components/DetailRent.jsx';
import Review from './Components/Review.jsx';







const CarDetails = () => {
  const {carListings,CurrentCategory,detailsIndex,setDetailsIndex} = useContext(AppContext)
  const [popUp,setPopUp] = useState(false)
  const openPopUp = ()=>{setPopUp(true)}
  const closePopUp = ()=>{setPopUp(false)}
  return (
    <View>
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

              <DetailRent  price = {carListings[detailsIndex].rentalPricePerDay}  openPopUp = {openPopUp}/>

              <Review comments = {carListings[detailsIndex].comments}/>



              <View style={{height:80}}>

              </View>
              <Modal 
              onRequestClose={closePopUp}
              animationType="fade"
              transparent= {true}
              visible={popUp} style={{flex:1,justifyContent:'center',alignItems:'center',
              backgroundColor:'rgba(255, 147, 79, 0.2)'}}>
               <SafeAreaView className='flex-1' style={{ backgroundColor: 'rgba(255, 147, 79, 0.2)' }}>
                  <View className='flex-1 justify-end'>
                    <View className='items-center justify-center bg-primary rounded-2xl mx-2'>
                      <View className='flex-row py-8 gap-2 justify-between px-4 w-full'>
                        <Image source={{uri: carListings[detailsIndex].path}} resizeMode='cover'  className='w-60 h-32 rounded-2xl' />
                        <View className='justify-between'>
                          <Text className='text-lg text-center text-dark-100 font-QuickSand'>
                            {carListings[detailsIndex].name}
                          </Text>
                          <Text className='w-full mt-3 text-md text-dark-100 font-Handlee'>N {carListings[detailsIndex].rentalPricePerDay}</Text>
                        </View>
                        
                      </View>
                      <TouchableOpacity>
                        <View className='bg-dark-100 w-28 p-4 mb-5 rounded-xl'>
                          <Text className='text-md text-primary text-center font-QuickSand'>
                            Checkout
                          </Text>
                        </View>
                      </TouchableOpacity>
                      
                    </View>
                  </View>
                </SafeAreaView>
              </Modal>


          </View>
        </ScrollView>
    </View>
    

  )
}

export default CarDetails