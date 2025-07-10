import { View, Text, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import CategoriesCards from './CategoriesCards'; // Assuming CategoriesCards is a .tsx or .jsx file
import { AppContext, CarCategories } from '../../provider/Context'; // Import CarCategories

const Categories = () => {
  const context = useContext(AppContext);
  if (!context) return null; // Context check

  const { carCategories } = context;

  return (
    <ScrollView className='w-full h-48 mt-7 ml-14 flex-row' horizontal>
      {carCategories.map((item: CarCategories, index: number) => {
        return (
          <CategoriesCards key={index} name={item.name} path={item.path} />
        );
      })}
    </ScrollView>
  );
};

export default Categories;