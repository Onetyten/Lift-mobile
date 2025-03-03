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


}

const FormField:React.FC<propItem> = (props) => {
    const[active,setactive] = useState(false)
    const[showPassword,setShowPassword] = useState(true)
    const {placeholdertext,title,keyboardType,handlechangetext,darkMode} = props
    const[passwordval,setPasswordVal] = useState(false)

    
    
  return (
    
    <View className=' justify-center items-center mt-6'>
      <Text className={` ${darkMode?'text-white':'text-slate-900'} text-left w-full px-5 p-2 font-Ubuntubold text-md`}>{title}</Text>
      <View className={` border-slate-900 bg-white ${active==true ?  'border-2':'border-[1px] '} w-11/12 rounded-md px-3  h-16 flex-row justify-between items-center`}>
      
        <TextInput className = {`h-full flex-1  text-lg ${darkMode?'text-slate-900 ':'text-slate-900 '} font-QuickSand `}  placeholder= {placeholdertext} placeholderTextColor='#a8a29e' secureTextEntry={(title == 'Password' || title == 'Confirm Password') && showPassword} onFocus={()=>{setactive(true)}} onBlur={()=>{setactive(false)}}  keyboardType={keyboardType} onChangeText={handlechangetext} style={{color:' #0f172a'}} />


        {
            (title == 'Password' || title == 'Confirm Password') &&(
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