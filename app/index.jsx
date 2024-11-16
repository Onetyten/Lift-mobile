import { Link } from "expo-router";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";








export default function Index() {

  return (
    <View className="bg-dark-200 flex-1 justify-center items-center">
      <Text className="text-2xl text-secondary font-Funnel">Edit app/index.tsx to edit this screen.</Text>
      
      <Link href= "/home" className="text-2xl text-primary font-extrabold font-QuickSand"
       >Edit app/index.tsx to edit this sc
       </Link>
    </View>
  )
}
