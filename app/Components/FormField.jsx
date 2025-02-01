import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons/faEyeSlash'


const FormField = (props) => {
    const[active,setactive] = useState(false)
    const[showPassword,setShowPassword] = useState(true)
    const {placeholdertext,title,value,keyboardType,handlechangetext} = props
    const[passwordval,setPasswordVal] = useState(false)

    
    
  return (
    
    <View className=' justify-center items-center mt-6'>
      <Text className='text-left w-full px-5 p-2 text-slate-900 font-Handlee text-md'>{title}</Text>
      <View className={`opacity-5 border-slate-900 border-[1px]  ${active==true ? 'border-2 opacity-10':'border-0'} w-11/12 rounded-md px-3  h-16 flex-row justify-between items-center`}>
      
        <TextInput className='h-full flex-1 text-lg text-slate-900 font-QuickSand '  placeholder= {placeholdertext} placeholderTextColor='#0f172a' secureTextEntry={title == 'Password'&& showPassword} onFocus={()=>{setactive(true)}} onBlur={()=>{setactive(false)}}  keyboardType={keyboardType} onChangeText={handlechangetext} />


        {
            title == 'Password' &&(
                <TouchableOpacity onPress={(()=>{setShowPassword(!showPassword)})}>
                    {showPassword&&(<FontAwesomeIcon icon={faEye} size={20} color='#ff934f'/>)}
                    {!showPassword&&(<FontAwesomeIcon icon={faEyeSlash} size={20} color='#ff934f'/>)}
                </TouchableOpacity>
            )
        }
        
      </View>
      
    </View>
  )
}

export default FormField