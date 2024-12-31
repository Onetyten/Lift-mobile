import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import BestSellingCard from './BestSellingCard.jsx'
import {AppContext,AppProvider} from '../Context.jsx'

const BestSelling = () => {
    const {carListings} = useContext(AppContext)
    const BestSelling = carListings.filter(car => car.trending == true)
  return (
    <View className='w-full  mt-7 flex-row' style={{marginLeft:40}}>
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
      />

    </View>
  )
}

export default BestSelling