import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { AppContext,AppProvider } from '../../provider/Context'
import { useContext } from 'react'

interface propItem{
  price:number
  openPopUp:()=>void
}

const DetailRent:React.FC<propItem> = (props) => {
  const context = useContext(AppContext);
    if (!context) {
        return null;
    }
  const{darkMode,setDarkMode} = context 
  const {price, openPopUp} = props
  return (
    <View>
        <View className={`flex-row justify-between mx-4 mt-10 items-center p-4 ${darkMode?'border-white':'border-slate-900'}  rounded-lg`} style={{borderWidth:1}}>
            <Text className={` ${darkMode?'text-white':'text-slate-900'} font-Ubuntubold text-2xl`}>
            {price}<Text className='text-lg'> / day</Text>
            </Text>
            <TouchableOpacity className={`${darkMode?'bg-white':' bg-slate-900 '} p-3 rounded-md`} onPress={openPopUp}>
              <Text className={`${darkMode?'text-slate-900':'text-slate-100'} text-sm font-Ubunturegular`}>
                  Rent Now
              </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DetailRent