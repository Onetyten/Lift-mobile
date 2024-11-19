import { View, Text } from 'react-native'
import React, { createContext,useState } from 'react'

const AppContext = createContext()

const AppProvider = ({children})=>{

    const [carCategories,setCarCategories]= useState([
        {
            name: 'Economy',
            path: require('../assets/images/Car categories/Economy.jpg')
        },
        {
            name: 'Luxury',
            path: require('../assets/images/Car categories/Luxury.jpeg')

        },
        {
            name: 'SUV',
            path: require('../assets/images/Car categories/SUV.jpeg'
)
        },
        {
            name: 'Electric Cars',
            path: require('../assets/images/Car categories/electric-cars.webp')

        },
        {
            name: 'Sports Cars',
            path: require('../assets/images/Car categories/SportCar.jpeg')

        },
        {
            name: 'Convertibles',
            path: require('../assets/images/Car categories/convertible.jpg'
)
        },
        {
            name: 'Pickup Trucks',
            path: require('../assets/images/Car categories/Pickup.jpeg'
)
        },
        {
            name: 'Vans',
            path: require('../assets/images/Car categories/Vans.jpg')

        },
        {
            name: 'Compact Cars',
            path: require('../assets/images/Car categories/Compact.jpg')

        },
        {
            name: 'Off-Road Vehicles',
            path: require('../assets/images/Car categories/Offroad.jpeg')

        },
        {
            name: 'Limousines',
            path: require('../assets/images/Car categories/Limo.jpeg')

        },
        {
            name: 'Mini Buses',
            path: require('../assets/images/Car categories/Minibus.jpg')

        },
        
        
        

    ])

    return(
        <AppContext.Provider value={{ carCategories, setCarCategories }}>
            {children}
        </AppContext.Provider>
    )

}

export {AppContext,AppProvider}