import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'
import React ,{useContext} from 'react'
import {AppContext,AppProvider} from '../Context.jsx'

const DetailScroll = () => {
  const {carListings,CurrentCategory,detailsIndex,setDetailsIndex} = useContext(AppContext)
  return (
    <View>
        <Text className='text-primary font-QuickSand'>
            Overview
        </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className ='bg-primary rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-xs'>
                      Horse Power
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[2].horsePower}
                    </Text>
                </View>

                <View className ='bg-primary rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-xs'>
                      0-60 mph
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[2].acceleration}
                    </Text>
                </View>

                <View className ='bg-primary rounded-xl p-5 mt-5 mx-1'>
                    <Text className='font-QuickSand text-xs'>
                      Engine Size
                    </Text>
                    <Text className='text-white font-QuickSand w-full'>
                      {carListings[2].engineSize}
                    </Text>
                </View>
                
                  <View className={`rounded-xl p-5 justify-center mt-5 mx-1`} style={{ backgroundColor:carListings[detailsIndex]?.electric? '#A3E635' : '#EF4444'}}>
                    <Text className='font-QuickSand text-xs'>
                      { carListings[detailsIndex]?.electric ? "Electric":"Not electric"}
                    </Text>
                </View>
              </ScrollView>
    </View>
  )
}

export default DetailScroll