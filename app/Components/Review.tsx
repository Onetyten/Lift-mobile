import { View, Text,Image } from 'react-native'
import React,{useContext} from 'react'
import { AppContext } from '../Context'

interface ReviewProps {
    comments: string[];
  }
  

const Review:React.FC<ReviewProps> = (props) => {
    const context = useContext(AppContext);

    if (!context) {
        return null;
    }
    const {darkMode} = context
    const {comments} = props
  return (
    <View>
        <Text className={`${darkMode?'text-white':'text-slate-900'}  font-Ubuntubold ml-4 mt-7 text-xl`}>
            Reviews
        </Text>

        <View className={`${darkMode?'border-white':'border-slate-900'}   ml-4 rounded-lg`}  style={{borderWidth:1}} >
        {comments.map((item,index)=>{
            return(
            
            <View className='p-4'  key={index}>
            <View className='flex-row items-center'>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCuCOisgxyOypyBi-hRYYV2Onv7KVI6QTVA&s'}} style ={{}} width={35} height={35} resizeMode='contain' className='rounded-full '/>
                <Text className={`${darkMode?'text-white':'text-slate-900'}  font-Ubuntubold ml-4 text-sm`}>Anonymous</Text>
            </View>
                <Text className={`${darkMode?'text-white':'text-slate-900'}  font-Ubunturegular ml-4 mt-3 text-md`} key={index}>{item}</Text>
            </View>
            
            )
        })}
        </View>
    </View>
  )
}

export default Review