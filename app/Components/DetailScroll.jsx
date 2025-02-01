import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import React ,{useContext} from 'react'
import {AppContext,AppProvider} from '../Context.jsx'

const DetailScroll = () => {
  const {carListings,CurrentCategory,detailsIndex,setDetailsIndex} = useContext(AppContext)
  return (
    <View>
        <Text className='text-slate-900 font-QuickSand'>
            Overview
        </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className ='bg-slate-900 rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-xs text-white'>
                      Horse Power
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[detailsIndex].horsePower}
                    </Text>
                </View>

                <View className ='bg-slate-900 rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-xs text-white'>
                      0-60 mph
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[detailsIndex].acceleration}
                    </Text>
                </View>

                <View className ='bg-slate-900 rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-white text-xs'>
                      Engine Size
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[detailsIndex].engineSize}
                    </Text>
                </View>
                
                  <View className={`rounded-xl p-5 justify-center mt-5 mx-1`} style={{ backgroundColor:carListings[detailsIndex]?.electric? '#16a34a' : '#EF4444'}}>
                    <Text className='font-QuickSand text-white text-xs'>
                      { carListings[detailsIndex]?.electric ? "Electric":"Not electric"}
                    </Text>
                </View>
              </ScrollView>
    </View>
  )
}

export default DetailScroll