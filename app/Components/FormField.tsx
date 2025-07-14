import { View, Text, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash'

interface propItem{
  placeholdertext:string
  title:string | null
  keyboardType:KeyboardTypeOptions
  handlechangetext:(text:string)=>void
  icon?:JSX.Element
  value:string


}

const FormField:React.FC<propItem> = (props:propItem) => {
    const darkMode = useSelector((state:RootState)=>state.darkmode.darkmode)
    const[active,setactive] = useState(false)
    const[showPassword,setShowPassword] = useState(true)
    const {placeholdertext,title,keyboardType,handlechangetext,icon} = props


    
    
  return (
    
    <View className=' justify-center items-center mt-6'>

      {title&&<Text className={` ${darkMode?'text-primary':'text-primary'} text-left w-full p-2 font-Inter-bold text-xl`}>{title}</Text>}
      <View className={`${active==true ?  `border-2 ${darkMode?'bg-gray-950/50':'bg-gray-400/5'}`:'border-[1px] '} border-gray-700/60 w-11/12 rounded px-3  h-16 flex-row justify-between items-center`}>
        {icon&&(
          <View className='flex-row items-center justify-center mr-2 text-gray-700'>
            {icon}
          </View>
        )}
        <TextInput className = {`h-full flex-1  text-lg ${darkMode?'text-white':'text-midnightBlue'} font-QuickSand `}  placeholder= {placeholdertext} placeholderTextColor='#a8a29e' secureTextEntry={(placeholdertext == 'Password' || placeholdertext == 'Confirm Password') && showPassword} onFocus={()=>{setactive(true)}} onBlur={()=>{setactive(false)}}  keyboardType={keyboardType} onChangeText={handlechangetext} />


        {
            (placeholdertext == 'Password' || placeholdertext == 'Confirm Password') &&(
                <TouchableOpacity onPress={(()=>{setShowPassword(!showPassword)})}>
                    {showPassword&&(<FontAwesomeIcon icon={faEye} size={20} color={`${darkMode?'#374151':'#0F0E17'}`} />)}
                    {!showPassword&&(<FontAwesomeIcon icon={faEyeSlash} size={20} color={`${darkMode?'#374151':'#0F0E17'}`}/>)}
                </TouchableOpacity>
            )
        }
        
      </View>
      
    </View>
  )
}

export default FormField