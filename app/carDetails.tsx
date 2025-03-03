import { View, Text, StatusBar, ScrollView, TouchableOpacity ,Image, Modal, SafeAreaView } from 'react-native'
import React,{useContext,useState} from 'react'
import {AppContext,CarListing } from './Context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { router } from 'expo-router';
import DetailHeader from './Components/DetailHeader';
import DetailProfile from './Components/DetailProfile';
import DetailScroll from './Components/DetailScroll';
import DetailRent from './Components/DetailRent';
import Review from './Components/Review';







const CarDetails = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  const {carListings,detailsIndex,darkMode} = context
  const [popUp,setPopUp] = useState(false)
  const openPopUp = ()=>{setPopUp(true)}
  const closePopUp = ()=>{setPopUp(false)}
  if (!carListings || carListings.length === 0 || detailsIndex < 0 || detailsIndex >= carListings.length) {
    return <Text>Car details not found.</Text>; // Or some other error handling
  }
  return (
    <View>
        
        <ScrollView className = {`${darkMode? 'bg-slate-900':'bg-stone-100'}`}>
          <View>
            <View className='bg-slate-900 pb-8 rounded-2xl'>
              <DetailHeader name={carListings[detailsIndex].name} carListings={carListings} detailsIndex={detailsIndex} />

              <Image source={{uri: carListings[detailsIndex].path}} className='w-full h-80 p-8 justify-center items-center rounded-2xl' style={{marginTop:40}} />

              <Text className='text-white font-Ubunturegular text-xl mt-6 pl-2'>
                  {carListings[detailsIndex].name.toUpperCase()}
              </Text>
            </View>


              <View className=' rounded-lg mt-10 mx-4 justify-between flex-wrap'>
              <View className='flex-row flex-wrap justify-evenly'>
                <DetailScroll/>
      
              </View>
                <Text className={`font-Ubunturegular text-md w-full text-left ${darkMode?'text-white':'text-slate-900'}  mt-6`}>
                    {carListings[detailsIndex].description}
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
              backgroundColor:'rgba(15, 23, 42, 0.6)'}}>
               <SafeAreaView className='flex-1' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                  <View className='flex-1 justify-end'>
                    <View className='items-center justify-center bg-slate-900 rounded-2xl mx-2'>
                      <View className='flex-row py-8 gap-2 justify-between px-4 w-full'>
                        <Image source={{uri: carListings[detailsIndex].path}} resizeMode='cover'  className='w-60 h-32 rounded-2xl' />
                        <View className='justify-between'>
                          <Text className='text-lg text-center text-white font-Ubunturegular'>
                            {carListings[detailsIndex].name}
                          </Text>
                          <Text className='w-full mt-3 text-md text-white font-Ubuntubold'>N {carListings[detailsIndex].rentalPricePerDay}</Text>
                        </View>
                        
                      </View>
                      <TouchableOpacity onPress={()=>{
                        closePopUp()
                        router.push('/Checkout')}}>
                        <View className='bg-white w-28 p-4 mb-5 rounded-xl'>
                          <Text className='text-md text-slate-900 text-center font-Ubunturegular'>
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