import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import React, { useContext } from 'react';
import { AppContext, CarListing } from './Context';
import BestSellingCard from './HomeComponent/BestSellingCard';

const CategoryTab = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { carListings, CurrentCategory, darkMode } = context;
  const Available = carListings.filter((car: CarListing) => car.category === CurrentCategory);

  if (Available.length === 0) {
    return (
      <View className={` ${darkMode ? 'bg-slate-900' : 'bg-stone-100'} flex-1 items-center w-full`}>
        <View className={`pl-4 w-full ${darkMode ? 'bg-white' : 'bg-slate-900'} rounded-b-xl pt-5`}>
          <Text
            className={`${darkMode ? 'text-slate-900' : 'text-white'} font-Orbitron text-left pl-5 w-full text-3xl pb-7`}
          >
            {CurrentCategory}
          </Text>
        </View>
        <View className='mt-64 w-full items-center'>
          <Text
            className={`h-full w-2/3 text-md font-Ubunturegular ${darkMode ? 'text-white' : ' text-slate-900'}`}
          >
            Oops, we dont have any {CurrentCategory} available try again some other time
          </Text>
          <Image
            source={require('../assets/images/Wetfloor.png')}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView className={` ${darkMode ? 'bg-slate-900' : 'bg-stone-100'} flex-1 items-center w-full`}>
      <View className={`pl-4 w-full ${darkMode ? 'bg-white' : 'bg-slate-900'} mb-5 rounded-b-xl pt-5`}>
        <Text
          className={`${darkMode ? 'text-slate-900' : 'text-white'} font-Orbitron text-left pl-5 w-full text-3xl pb-7`}
        >
          {CurrentCategory}
        </Text>
      </View>

      <FlatList
        data={Available}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <BestSellingCard
              name={item.name}
              path={item.path}
              price={item.rentalPricePerDay}
              score={item.reviewStore}
              category={item.category}
              id={item.id}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
        ListFooterComponent={() => <View style={{ height: 50 }} />}
        ListHeaderComponent={() => <View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
};

export default CategoryTab;