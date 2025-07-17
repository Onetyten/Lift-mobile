import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import CategoriesCards from './CategoriesCards'; // Assuming CategoriesCards is a .tsx or .jsx file
import { AppContext, CarCategories } from '../../provider/Context'; // Import CarCategories

interface propType{
  darkMode:boolean
}

const carTypes = ["Build","Manufacturer","Cities","Body Type","Budget"]

const Categories = (props:propType) => {
  const {darkMode} = props
  const context = useContext(AppContext);
  if (!context) return null; // Context check

  const { carCategories } = context;

  return (
    <View className='w-full mt-5 ml-14 gap-5' >
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View className={`pr-8 flex-row`} >
            {
              carTypes.map((item,index)=>{
                return(
                  <TouchableOpacity key={index} className={`${index==0?'bg-primary':`${darkMode?'bg-gray-500/30':'bg-midnightBlue/10'}`} rounded-lg mr-3 p-3 px-6`}>
                    <Text className={` text-2xl ${darkMode?`${index==0?'text-midnightBlue':'text-white'}`:'text-midnightBlue'}`}>
                        {item}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
      </ScrollView>

      


      <ScrollView horizontal  showsHorizontalScrollIndicator={false} className='flex-row'>
        {carCategories.map((item: CarCategories, index: number) => {
          return (
            <CategoriesCards key={index} name={item.name} path={item.path} darkMode={darkMode} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;