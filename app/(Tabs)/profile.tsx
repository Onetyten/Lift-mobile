import { View, Text, SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProfileImg from './icons/Headshot.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from '../../provider/Context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'



const Profile = () => {
  const {darkMode} = useContext(AppContext)
  const [userData,setUserData] = useState({
    name: '',
    email: ''
  } 
  )
  const getUserData = async () => {
    try {
      const savedUserData = await AsyncStorage.getItem('userData');
      if (savedUserData) {
        const userData = JSON.parse(savedUserData);
        // console.log(userData);
        setUserData(userData)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getUserData()
  },[])
  return (
    <SafeAreaView className='bg-stone-100 w-full '>
      <View className='p-6 w-full' style={{padding:20,width:'100%',backgroundColor:'#0f172a',borderBottomRightRadius:20,borderBottomLeftRadius:20,borderWidth:2}}>
        <View  className='flex-row justify-start items-center w-full' style={{gap:20}}>
          <View> 
            <Image source={ProfileImg} resizeMode='contain' className='h-4 w-5  border-white border-[1px] rounded-full' style={{width:100,height:100}}/>
          </View>
          <View className='gap-3'>
            <Text className='text-2xl text-white font-Ubunturegular'>{userData.name.toUpperCase()}</Text>
            <Text className='font-xl text-white font-Ubunturegular'>{userData.email}</Text>
          </View>
        </View>        
      </View>

      <View className='w-full flex-row p-6 justify-between'>
        <Text className='border-x-2 flex-1 font-Ubunturegular text-center p-2 py-6 border-slate-900'> 0 NGN</Text>
        <Text className='border-x-2 flex-1 font-Ubunturegular text-center p-2 py-6 border-slate-900'>12 contracts completed</Text>
      </View>
      <View className='items-center pt-8 gap-6 w-full'>

      <TouchableOpacity className='flex-row items-center justify-between gap-3' style={{width:'60%'}}>
          <FontAwesomeIcon icon={faMoneyBill} size={20} color='#64748b'/> 
          <Text className='text-slate-500 text-2xl font-Ubunturegular'>
            Payment
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity className='flex-row items-center justify-between gap-3' style={{width:'60%'}}>
          <FontAwesomeIcon icon={faHeart} size={20} color='#64748b'/> 
          <Text className='text-slate-500 text-2xl font-Ubunturegular'>
            Tell a friend
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row items-center justify-between gap-3' style={{width:'60%'}}>
          <FontAwesomeIcon icon={faVolumeHigh} size={20} color='#64748b'/> 
          <Text className='text-slate-500 text-2xl font-Ubunturegular'>
            Promotion
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity className='flex-row items-center justify-between gap-3' style={{width:'60%'}}>
          <FontAwesomeIcon icon={faCog} size={20} color='#64748b'/> 
          <Text className='text-slate-500 text-2xl font-Ubunturegular'>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-row items-center justify-between gap-3' style={{width:'60%'}}>
          <FontAwesomeIcon icon={faPowerOff} size={20} color='#64748b'/> 
          <Text className='text-slate-500 text-2xl font-Ubunturegular'>
            Log out
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Profile