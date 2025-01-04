import { View, Text, SafeAreaView,ScrollView,FlatList,StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import {AppContext,AppProvider} from '../Context.jsx'
import BestSellingCard from '../HomeComponent/BestSellingCard.jsx'
import CartItem from '../HomeComponent/CartItem.jsx'

const Bookmark = () => {
  const {carListings,CurrentCategory,bookmark,setBookmark} = useContext(AppContext)
  if (bookmark.length==0)
  return(
    <View className = {`bg-dark-200 flex-1 items-center pl-1 justify-between`} style={{paddingTop:15}}>
      <Text className='text-primary font-Handlee text-left pl-5 w-full text-4xl pb-10'>
        Cart
      </Text>
      <View className='mt-64'>
        <Text className='h-full text-md font-QuickSand text-primary '>
          Your cart is empty right now
        </Text>
      </View>

  </View>
  )
  return (
      <SafeAreaView className = {`bg-dark-200 flex-1 items-center pl-1 justify-between`} style={{paddingTop:15}}>
        <View className='flex-row items-start pr-20 pb-4 pl-10'>
          <Text className='text-primary font-Handlee text-left pl-5 w-full text-4xl pb-4'>
              Cart
          </Text>
          <View>
            <TouchableOpacity onPress={()=>{
              setBookmark([])
            }}>
              <Text className='text-primary font-Handlee text-left border-primary w-full text-xl p-2 rounded-xl' style={{borderWidth:1,}}>
                Clear Cart
              </Text>
          </TouchableOpacity>
          </View>
        </View>
        <ScrollView className='mt-6'>
          <View className='flex-row flex-wrap justify-around mb-8'>
            {bookmark.map((item)=>{
              return(
                <View key={item.id}>
                  <CartItem name = {item.name} path = {item.path} price = {item.rentalPricePerDay} score ={item.reviewStore} category = {item.category} id = {item.id}/>
                </View>
                
              )
            })}
          </View>
        </ScrollView>

      </SafeAreaView>
  
  )
}

export default Bookmark
