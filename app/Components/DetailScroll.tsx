import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import React ,{useContext} from 'react'
import {AppContext,AppProvider} from '../Context'

const DetailScroll = () => {
  const context = useContext(AppContext);

    if (!context) {
        return null;
    }
  const {carListings,detailsIndex,darkMode} = context
  return (
    <View>
        <Text className={`${darkMode?'text-white':'text-slate-900'} font-Ubunturegular`}>
            Overview
        </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className ={`bg-slate-900 ${darkMode?'border-[1px] ':'border-0'} border-white rounded-xl p-5 mt-5 mx-1`}>
                    <Text className='font-Ubunturegular text-xs text-white'>
                      Horse Power
                    </Text>
                    <Text className='text-white font-Ubunturegular w-full'>
                      {carListings[detailsIndex].horsePower}
                    </Text>
                </View>

                <View className ={`bg-slate-900 ${darkMode?'border-[1px] ':'border-0'} border-white rounded-xl p-5 mt-5 mx-1`}>
                    <Text className='font-Ubunturegular text-xs text-white'>
                      0-60 mph
                    </Text>
                    <Text className='text-white font-Ubunturegular w-full'>
                      {carListings[detailsIndex].acceleration}
                    </Text>
                </View>

                <View className ={`bg-slate-900 ${darkMode?'border-[1px] ':'border-0'} border-white rounded-xl p-5 mt-5 mx-1`}>
                    <Text className='font-Ubunturegular text-white text-xs'>
                      Engine Size
                    </Text>
                    <Text className='text-white font-Ubunturegular w-full'>
                      {carListings[detailsIndex].engineSize}
                    </Text>
                </View>
                
                  <View className={`rounded-xl p-5 justify-center mt-5 mx-1`} style={{ backgroundColor:carListings[detailsIndex]?.electric? '#16a34a' : '#EF4444'}}>
                    <Text className='font-Ubunturegular text-white text-xs'>
                      { carListings[detailsIndex]?.electric ? "Electric":"Not electric"}
                    </Text>
                </View>
              </ScrollView>
    </View>
  )
}

export default DetailScroll