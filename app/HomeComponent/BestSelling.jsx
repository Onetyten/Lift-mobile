import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import BestSellingCard from './BestSellingCard.jsx'
import {AppContext,AppProvider} from '../Context.jsx'

const BestSelling = () => {
    const {bestSelling} = useContext(AppContext)
  return (
    <ScrollView className='w-full h-96 ml-14  mt-7 flex-row' horizontal>
    {bestSelling.map((item)=>{
        return(
            <BestSellingCard name = {item.name} path = {item.path} price = {item.rentalPricePerDay}/>
        )

    })}

    </ScrollView>
  )
}

export default BestSelling