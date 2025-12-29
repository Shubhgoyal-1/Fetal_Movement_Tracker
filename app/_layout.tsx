import { Stack, useRouter } from "expo-router";
import "./global.css"
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const InfoIcon = () => {
  const router = useRouter()

  return (
    <Pressable onPress={() => {
      router.setParams({ showInfo: "true" })
    }}>
      <Feather
        name="info"
        size={22}
        color="#000"
        style={{ marginRight: 16 }}
      />
    </Pressable>
  )
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index"
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="record" options={{
        title: "Record DFM",
        headerTitleAlign: "center",
        headerRight: () => (
          <InfoIcon />
        ),
      }} />
    </Stack>
  )
}
