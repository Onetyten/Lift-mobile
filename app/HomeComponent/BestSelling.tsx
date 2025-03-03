import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import BestSellingCard from './BestSellingCard'
import {AppContext,AppProvider} from '../Context'

const BestSelling = () => {
  const context = useContext(AppContext);
      if (!context) return null;
    const {carListings} = context
    const BestSelling = carListings.filter(car => car.trending == true)
  return (
    <View className='w-full  mt-7 flex-row' style={{marginLeft:5}}>
      <FlatList
      style={{marginBottom: 10,paddingBottom:20}}
      data = {BestSelling}
      horizontal
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>{
        return(
          <BestSellingCard name = {item.name} path = {item.path} price = {item.rentalPricePerDay} score ={item.reviewStore} category = {item.category} id = {item.id}/>
        )
      }}
      ItemSeparatorComponent={()=><View style={{width:20}}></View>}
      />

    </View>
  )
}

export default BestSelling