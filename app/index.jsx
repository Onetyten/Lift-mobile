import { Link } from "expo-router";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";








export default function Index() {

  return (
    <View className="bg-dark-200 flex-1 justify-center items-center">
      <TouchableOpacity>
          <Link href= "/home" className="text-2xl p-6 rounded-2xl  bg-primary font-extrabold font-QuickSand">
            Sign In
          </Link>
      </TouchableOpacity>
      

    </View>
  )
}
