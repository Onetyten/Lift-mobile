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
      <View className = {`bg-dark-200 flex-1 items-center pl-4 justify-between`} style={{paddingTop:StatusBar.currentHeight+20}}>
        <Text className='text-primary font-Handlee text-left pl-5 w-full text-4xl pb-10'>
          {CurrentCategory}
        </Text>
        <View className='mt-64'>
          <Text className='h-full text-md font-QuickSand text-primary '>
              Oops, we dont have any {CurrentCategory} available try again some other time
          </Text>
          <Image source={require('../assets/images/Wetfloor.png')} style={{width:100, height:100,resizeMode: 'contain'}} /> 
        </View>

    </View>
    )
  return (
      <SafeAreaView className = {`bg-dark-200 flex-1 items-center pl-4`} style={{paddingTop:StatusBar.currentHeight+20}}>
        <Text className='text-primary font-Handlee text-left pl-5 w-full text-4xl pb-10'>
          {CurrentCategory}
        </Text>
          <FlatList
          style={{borderTopColor:'#FF934F', borderTopWidth:2,borderTopRightRadius:10}}
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