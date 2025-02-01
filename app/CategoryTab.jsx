import { View, Text, SafeAreaView,ScrollView,FlatList,StatusBar, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import {AppContext,AppProvider} from './Context.jsx'
import BestSellingCard from './HomeComponent/BestSellingCard.jsx'

// import {  } from 'react-native-web'

const CategoryTab = () => {
  const {carListings,CurrentCategory} = useContext(AppContext)
  const Available = carListings.filter(car => car.category == CurrentCategory)
  
  if (Available.length==0)
    return(
      <View className = {`bg-stone-100 flex-1 items-center w-full`} >
        <View className ='pl-4 w-full bg-slate-900 rounded-b-xl pt-5'>
          <Text className='text-white  font-Handlee text-left pl-5 w-full text-4xl pb-7'>
            {CurrentCategory}
          </Text>
        </View>
        <View className='mt-64 w-full items-center'>
          <Text className='h-full w-2/3 text-md font-QuickSand text-slate-900 '>
              Oops, we dont have any {CurrentCategory} available try again some other time
          </Text>
          <Image source={require('../assets/images/Wetfloor.png')} style={{width:100, height:100,resizeMode: 'contain'}} /> 
        </View>

    </View>
    )
  return (
      <SafeAreaView className = {`bg-stone-100 flex-1 items-center w-full`}>
        <View className ='pl-4 w-full bg-slate-900 rounded-b-xl pt-5'>
          <Text className='text-white  font-Handlee text-left pl-5 w-full text-4xl pb-7'>
            {CurrentCategory}
          </Text>
        </View>
        
          <FlatList
          data = {Available}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=>{
            return(
              <BestSellingCard name = {item.name} path = {item.path} price = {item.rentalPricePerDay} score ={item.reviewStore} category = {item.category} id = {item.id}/>
            )
          }}
          ItemSeparatorComponent={()=><View style={{height:50}}></View>}
          ListFooterComponent={<View style={{ height: 50 }} />}
          ListHeaderComponent={<View style={{ height: 10 }} />}

          />

      </SafeAreaView>

  )
}
export default CategoryTab