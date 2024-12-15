import { View, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "@/global.css"


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex items-center justify-center ">
      <Text className="" >Open Up</Text>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}
