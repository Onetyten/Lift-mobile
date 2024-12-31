import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import CategoriesCards from './CategoriesCards.jsx'
import {AppContext,AppProvider} from '../Context.jsx'


const Categories = () => {
    const {carCategories} = useContext(AppContext)
 
  return (
        <ScrollView className='w-full h-48 mt-7 ml-14 flex-row' horizontal>
            {carCategories.map((item,index)=>{
                return(
                    <CategoriesCards key = {index} name = {item.name} path = {item.path} />
                )

            })}

        </ScrollView>

  )
}

export default Categories