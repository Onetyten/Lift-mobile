import { View, Text, SafeAreaView, ScrollView,TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { AppContext } from '../provider/Context';

const Checkout = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { carListings, detailsIndex, darkMode } = context;
    const shipping = 2500;

    return (
        <SafeAreaView className={`flex-1 ${darkMode ? 'bg-slate-900' : 'bg-stone-100'}`}>
            <Text className={`p-3 text-2xl text-center font-Ubunturegular ${darkMode ? 'text-white border-white' : 'text-slate-900 border-slate-900'}`} style={{ borderWidth: 1 }}>
                Checkout
            </Text>
            <ScrollView className="pl-5">
                <View className={`mt-3 py-4 flex-row justify-between rounded-xl ${darkMode ? 'border-white' : 'border-slate-900'}`} style={{ borderWidth: 0 }}>
                    <View className="flex-row gap-4">
                        <Image
                            source={typeof carListings[detailsIndex].profilepic === 'string' ? { uri: carListings[detailsIndex].profilepic } : carListings[detailsIndex].profilepic}
                            width={80}
                            height={80}
                            resizeMode="cover"
                            className="rounded-xl"
                        />
                        <View className="justify-between">
                            <Text className={`text-xl font-Ubuntubold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                {carListings[detailsIndex].profileName}
                            </Text>
                            <Text className={`text-sm font-Ubunturegular ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>
                                {carListings[detailsIndex].state}, {carListings[detailsIndex].country}
                            </Text>
                            <Text className={`text-sm font-Ubunturegular ${darkMode ? 'text-gray-400' : 'text-slate-900'}`}>
                                Price: {carListings[detailsIndex].rentalPricePerDay}
                            </Text>
                        </View>
                    </View>
                </View>

                <Text className="text-red-600 text-sm mt-7 font-Ubuntuitalic">
                    Authorities may apply duties, fees, and taxes
                </Text>

                <View className="mt-1">
                
                    <View>          

                        <View className=' justify-center items-center mt-6'>
                            <Text className={` ${darkMode?'text-white':'text-slate-900'} text-left w-full px-5 p-2  font-Ubuntubold text-md`}>Shipping Address</Text>
                        
                            <TextInput className={`h-full w-[90%] rounded-md flex-1 bg-white text-lg ${darkMode?'text-slate-900 ':'text-slate-900 '} font-Ubunturegular `}  placeholder= 'Shipping Address' placeholderTextColor='#ffffff' />
                        </View>

                    </View>
                    <View className="ml-5 mt-6">
                        <Text className={`text-md font-Ubuntubold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            Payment
                        </Text>
                        <View className="w-96 mt-5 gap-6 flex-row flex-wrap">
                            <TouchableOpacity>
                                <View>
                                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMDxcQYNFctvlOZ0cJTn4XVhXIG9EZnvaHGw&s' }} width={80} height={80} resizeMode="cover" className={`rounded-xl ${darkMode ? 'border-[1px] border-white' : 'border-[1px] border-slate-900'}`} />
                                    <Text className={`text-md mt-5 font-Ubunturegular text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        UseCard
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FLrfaabLHBPCsxKM31NldSC5DLBWM9UZTg&s' }} width={80} height={80} resizeMode="cover" className={`rounded-xl ${darkMode ? 'border-[1px] border-white' : 'border-[1px] border-slate-900'}`} />
                                    <Text className={`text-md mt-5 font-Ubunturegular  text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Paypal
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMSFo-Ll94Fhk2aNYLdrTSp8RilJ6ayg5xg&s' }} width={80} height={80} resizeMode="cover" className={`rounded-xl ${darkMode ? 'border-[1px] border-white' : 'border-[1px] border-slate-900'}`} />
                                    <Text className={`text-md mt-5 font-Ubunturegular text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        Paypal Credit
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity className={`w-80 p-4 mt-8 rounded-xl ${darkMode ? 'border-white' : 'border-slate-900'}`} style={{ borderWidth: 1, borderStyle: 'dashed' }}>
                            <Text className={`text-xl font-Ubuntubold text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Coupon
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <View className={`flex-row justify-between mt-6 w-80`}>
                                <Text className={`text-md font-Ubunturegular text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Price
                                </Text>
                                <Text className={`text-md font-Ubunturegular ml-6 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {carListings[detailsIndex].rentalPricePerDay}
                                </Text>
                            </View>

                            <View className={`flex-row justify-between mt-6 w-80`}>
                                <Text className={`text-md font-Ubunturegular text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Shipping
                                </Text>
                                <Text className={`text-md font-Ubunturegular ml-6 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {shipping}
                                </Text>
                            </View>

                            <View className={`flex-row justify-between w-80 mt-6`}>
                                <Text className={`text-md font-Ubunturegular text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Total
                                </Text>
                                <Text className={`text-md font-Ubunturegular ml-6 text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {carListings[detailsIndex].rentalPricePerDay + shipping}
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity className={`w-80 p-3 mt-8 rounded-md ${darkMode ? 'bg-gray-100' : 'bg-slate-900'}`}>
                            <Text className={` ${darkMode?'text-slate-900':'text-white'}  text-xl font-Ubunturegular text-center`}>
                                Confirm Pay
                            </Text>
                        </TouchableOpacity>
                        <View style={{ height: 50 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};



export default Checkout;