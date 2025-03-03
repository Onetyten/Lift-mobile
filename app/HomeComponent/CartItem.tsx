import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { router } from 'expo-router';
import { AppContext, CarListing } from '../Context'; // Import CarListing

interface CartItemProps {
  name: string;
  path: string | { uri: string }; // Allow both string and object
  price: number;
  score: number;
  category: string;
  id: number;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const context = useContext(AppContext);
  if (!context) return null;

  const { carListings, detailsIndex, setDetailsIndex, setBookmark } = context;
  const { name, path, price, score, category, id } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        router.push('/carDetails' );
        setDetailsIndex(id);
      }}
    >
      <View className='w-28 mx-2 mb-7 object-contain'>
        <View className='object-contain rounded-md overflow-hidden'>
          <ImageBackground
            source={typeof path === 'string' ? { uri: path } : path}
            className='w-full h-28 justify-center items-center bg-primary rounded-2xl bg-blend-multiply'
            style={{ backgroundBlendMode: 'multiply' }}
          >
            <View className=' bg-slate-900 w-full h-full opacity-25 absolute'></View>
            <View className='absolute top-2 left-1'>
              <Text className=' text-sm text-white font-Ubunturegular'>{name}</Text>
            </View>
          </ImageBackground>
        </View>
        <View className='flex-row justify-center w-full'>
          <View className='items-center justify-between flex-row w-full'>
            <Text className='mt-3 text-xs text-slate-900 font-Ubunturegular'>N {price}</Text>

            <TouchableOpacity
              onPress={() => {
                setBookmark((prevBookmark: CarListing[]) => {
                  const isBookmarked = prevBookmark.some(
                    (bookmark: CarListing) => bookmark.id === id
                  );
                  if (isBookmarked) {
                    return prevBookmark.filter((bookmark: CarListing) => bookmark.id !== id);
                  }
                  return prevBookmark;
                });
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} size={20} color='#dc2626' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;