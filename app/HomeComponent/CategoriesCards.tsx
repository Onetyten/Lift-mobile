import { View, Text, ImageBackground, TouchableOpacity ,ImageSourcePropType} from 'react-native';
import React, { useContext } from 'react';
import { useRouter } from 'expo-router';
import { AppContext } from '../Context'; // Import ImageSourcePropType

interface CategoriesCardsProps {
  name: string;
  path: ImageSourcePropType;
}

const CategoriesCards: React.FC<CategoriesCardsProps> = (props) => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { setCurrentCategory, darkMode } = context;
  const { name, path } = props;
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        setCurrentCategory(name);
        router.push('/categoryTab');
      }}
    >
      <View className='w-40 mr-6 rounded-2xl object-contain h-52 overflow-hidden'>
        <ImageBackground
          source={path}
          className='w-full h-40 justify-center items-center bg-blend-multiply'
          style={{ backgroundBlendMode: 'multiply' }}
        >
          <View className='w-full h-full opacity-25 absolute'></View>
        </ImageBackground>
        <Text
          className={`w-full text-center text-md font-Ubunturegular ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCards;