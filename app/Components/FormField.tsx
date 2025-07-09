import { View, Text, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash'

interface propItem{
  placeholdertext:string
  title:string
  keyboardType:KeyboardTypeOptions
  handlechangetext:()=>void
  darkMode:boolean
  icon?:JSX.Element


}

const FormField:React.FC<propItem> = (props) => {
    const[active,setactive] = useState(false)
    const[showPassword,setShowPassword] = useState(true)
    const {placeholdertext,title,keyboardType,handlechangetext,darkMode,icon} = props
    const[passwordval,setPasswordVal] = useState(false)

    
    
  return (
    
    <View className=' justify-center items-center mt-6'>

      {title&&<Text className={` ${darkMode?'text-primary':'text-primary'} text-left w-full p-2 font-Ubuntubold text-xl`}>{title}</Text>}
      <View className={`${active==true ?  `border-2 ${darkMode?'bg-gray-950/50':'bg-gray-400/5'}`:'border-[1px] '} border-gray-700/60 w-11/12 rounded-3xl px-3  h-16 flex-row justify-between items-center`}>
        {icon&&(
          <View className='flex-row items-center justify-center mr-2 text-gray-700'>
            {icon}
          </View>
        )}
        <TextInput className = {`h-full flex-1  text-lg ${darkMode?'text-midnightBlue  ':'text-midnightBlue '} font-QuickSand `}  placeholder= {placeholdertext} placeholderTextColor='#a8a29e' secureTextEntry={(title == 'Password' || title == 'Confirm Password') && showPassword} onFocus={()=>{setactive(true)}} onBlur={()=>{setactive(false)}}  keyboardType={keyboardType} onChangeText={handlechangetext} style={{color:' #0f172a'}} />


        {
            (placeholdertext == 'Password' || placeholdertext == 'Confirm Password') &&(
                <TouchableOpacity onPress={(()=>{setShowPassword(!showPassword)})}>
                    {showPassword&&(<FontAwesomeIcon icon={faEye} size={20} color='#0f172a'/>)}
                    {!showPassword&&(<FontAwesomeIcon icon={faEyeSlash} size={20} color='#0f172a'/>)}
                </TouchableOpacity>
            )
        }
        
      </View>
      
    </View>
  )
}

export default FormField