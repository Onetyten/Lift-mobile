import { View, Text, SafeAreaView, ScrollView,Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import {AppContext,AppProvider} from './Context.jsx'
import FormField from './Components/FormField'


const Checkout = () => {
    const {carListings,detailsIndex,setDetailsIndex} = useContext(AppContext)
    const shipping = 2500
  return (
    <SafeAreaView className = {`bg-stone-100 flex-1`}>
        <Text className='text-slate-900 font-QuickSand p-3 text-2xl text-center border-slate-900' style={{borderWidth:1}}>Checkout</Text>
        <ScrollView className='pl-5'>
            <View className='mt-3 py-4 flex-row justify-between border-slate-900 rounded-xl' style={{borderWidth:0}}>
                <View className='flex-row gap-4'>
                    <Image source={typeof carListings[detailsIndex].profilepic === 'string'? {uri: carListings[detailsIndex].profilepic}:carListings[detailsIndex].profilepic} width={80} height={80} resizeMode='cover' className='rounded-xl '/>
                    <View className='justify-between'>
                        <Text className='text-slate-900 text-xl font-Handlee'>{carListings[detailsIndex].profileName}</Text>
                        <Text className='text-slate-900 text-sm font-QuickSand'>{carListings[detailsIndex].state} , {carListings[detailsIndex].country}</Text>
                        <Text className='text-slate-900 text-sm font-QuickSand'>Price: {carListings[detailsIndex].rentalPricePerDay}</Text>
                    </View>
                </View>
            </View>

            <Text className='text-red-600 mt-7 '>
                Authorities may apply duties,fees and taxes
            </Text>

            <View className='mt-1'>
                <FormField placeholdertext= 'Shipping Address' title = 'Shipping Addresss' value ={''} keyboardType = 'email-address' handlechangetext={''}  />
                <View className=' ml-5 mt-6'>
                    <Text className='text-slate-900 text-md font-Handlee'>Payment</Text>
                    <View className='w-96 mt-5 gap-6 flex-row flex-wrap'>
                       <TouchableOpacity>
                            <View>
                                <View>
                                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDxcQYNFctvlOZ0cJTn4XVhXIG9EZnvaHGw&s'}} width={80} height={80} resizeMode='cover' className='rounded-xl border-[1px] border-slate-900'/>
                                </View>
                                
                                
                                <Text className='text-slate-900 text-xl text-center'>
                                    UseCard
                                </Text>
                            </View> 
                       </TouchableOpacity>
                       <TouchableOpacity>
                            <View>
                                <View>
                                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FLrfaabLHBPCsxKM31NldSC5DLBWM9UZTg&s'}} width={80} height={80} resizeMode='cover' className='rounded-xl border-[1px] border-slate-900'/>

                                </View>
                                
                                <Text className='text-slate-900 text-xl text-center'>
                                    Paypal
                                </Text>
                            </View> 
                       </TouchableOpacity>
                       <TouchableOpacity>
                            <View>
                                <View>
                                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMSFo-Ll94Fhk2aNYLdrTSp8RilJ6ayg5xg&s'}} width={80} height={80} resizeMode='cover' className='rounded-xl border-[1px] border-slate-900'/>
                                </View>
                                <Text className='text-slate-900 text-xl text-center'>
                                    Paypal Credit
                                </Text>
                            </View> 
                       </TouchableOpacity>
                    </View>
                   
                    <TouchableOpacity className='border-slate-900 w-80 p-4 mt-8 rounded-xl' style={{borderWidth:1, borderStyle:'dashed'}}>
                            <Text className='text-slate-900 text-xl text-center'>
                                Coupon
                            </Text>
                    </TouchableOpacity>

                    <View>
                        <View className='flex-row justify-between mt-6  w-80'>
                            <Text className='text-slate-900 text-xl text-center'>
                                Price
                            </Text>
                            <Text className='text-slate-900 text-xl ml-6 text-center'>
                                {carListings[detailsIndex].rentalPricePerDay}
                            </Text>
                        </View>

                        <View className='flex-row justify-between mt-6 w-80'>
                            <Text className='text-slate-900 text-xl text-center'>
                                Shipping
                            </Text>
                            <Text className='text-slate-900 text-xl ml-6 text-center'>
                                {shipping}
                            </Text>
                        </View>

                        <View className='flex-row justify-between  w-80 mt-6'>
                            <Text className='text-slate-900 text-xl text-center'>
                                Total
                            </Text>
                            <Text className='text-slate-900 text-xl ml-6 text-center'>
                                {carListings[detailsIndex].rentalPricePerDay+shipping}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity className='bg-slate-900 w-80 p-4 mt-8 rounded-xl'>
                            <Text className='text-white text-2xl text-center'>
                                Confirm Pay
                            </Text>
                    </TouchableOpacity>
                    <View style={{height:50}}/>
                    
                    
                </View>
                
            </View>

        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Checkout