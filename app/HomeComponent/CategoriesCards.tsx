import { View, Text, ImageBackground, TouchableOpacity ,ImageSourcePropType} from 'react-native';
import React, { useContext } from 'react';
import { useRouter } from 'expo-router';
import { AppContext } from '../../provider/Context'; // Import ImageSourcePropType

interface CategoriesCardsProps {
  name: string;
  path: ImageSourcePropType;
  darkMode:boolean
}

const CategoriesCards = (props:CategoriesCardsProps) => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { setCurrentCategory} = context;
  const { name, path,darkMode} = props;
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => { setCurrentCategory(name); router.push('/categoryTab');}} className='gap-4 mb-6'>

      <View className='w-40 mr-6 object-contain h-40 rounded-lg overflow-hidden relative'>
        <ImageBackground source={path} className='w-full h-40 justify-center items-center bg-blend-multiply' style={{ backgroundBlendMode: 'multiply' }}>
          <View className='w-full h-full opacity-25 absolute'></View>
        </ImageBackground>
        <View className='absolute bg-midnightBlue/10 w-full h-full'>

        </View>
      </View>

      <Text className={`w-full text-center text-xl font-Inter-regular ${ darkMode?'text-white':'text-midnightBlue'}`} >
          {name}
      </Text>

    </TouchableOpacity>
  );
};

export default CategoriesCards;