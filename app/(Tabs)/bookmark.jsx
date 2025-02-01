import { View, Text, SafeAreaView,ScrollView,FlatList,StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import {AppContext,AppProvider} from '../Context.jsx'
import BestSellingCard from '../HomeComponent/BestSellingCard.jsx'
import CartItem from '../HomeComponent/CartItem.jsx'

const Bookmark = () => {
  const {carListings,CurrentCategory,bookmark,setBookmark} = useContext(AppContext)
  if (bookmark.length==0)
  return(
    <View className = {`bg-stone-100 flex-1 items-center justify-between`}>
      <Text className='text-white bg-slate-900 font-Handlee text-left pl-5 w-full text-4xl pb-4'  style={{paddingTop:15}}>
        Cart
      </Text>
      <View className='mt-64'>
        <Text className='h-full text-md font-QuickSand text-slate-900 '>
          Your cart is empty right now
        </Text>
      </View>

  </View>
  )
  return (
      <SafeAreaView className = {`bg-stone-100 flex-1 items-center pl-1 justify-between`} >
        <View className='flex-row items-start pr-20 pb-4 pl-10 bg-slate-900'  style={{paddingTop:15}}>
          <Text className='text-white  font-Handlee text-left px-5 w-full text-4xl'>
              Cart
          </Text>
          <View>
            <TouchableOpacity onPress={()=>{
              setBookmark([])
            }}>
              <Text className='text-white font-Handlee text-left border-white w-full text-sm p-2 rounded-md' style={{borderWidth:1,}}>
                Clear Cart
              </Text>
          </TouchableOpacity>
          </View>
        </View>
        <ScrollView className='mt-6'>
          <View className='flex-row flex-wrap justify-start mb-8'>
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
