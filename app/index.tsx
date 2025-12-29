import Divider from "@/components/Divider";
import WomenCard from "@/components/WomenCard";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SessionCard from "@/components/SessionCard";
import { useEffect, useState } from "react";
import { useSessionStore } from "@/store/session.store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BabyClockIcon = () => {
  return (
    <View className="relative w-10 h-10 items-center justify-center">
      <Text className="text-[24px]">👶</Text>
      <Text className="absolute top-0 right-0 text-[12px] rounded-full">
        ⏰
      </Text>
    </View>
  );
};


export default function Index() {
  const router = useRouter()
  const sessions = useSessionStore(state => state.sessions);
  const loadSessions = useSessionStore(state => state.loadSessions);

  useEffect(() => {
    loadSessions();
  }, []);

  //for testing 
  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, [])

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="items-center flex-row justify-between mt-4">
        <View className="w-20" />
        <Text className="text-[25px] font-extrabold text-black">
          DFM (Kick counter)
        </Text>
        <View className="flex-row items-center bg-gray-100 px-3 py-1 rounded-full space-x-1 mr-6">
          <BabyClockIcon />
          <Text className="text-[24px] font-semibold text-black">0</Text>
        </View>
      </SafeAreaView>
      <Divider />
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.startTime.toString()}
        ListHeaderComponent={
          <View className="pt-4 px-6">
            <WomenCard />
            <Pressable
              className="border rounded-full p-4 items-center"
              onPress={() => router.push("/record")}
            >
              <Text className="text-[21px] font-semibold">
                Record Fetal Movement
              </Text>
            </Pressable>
            <Text className="text-[21px] font-bold mt-8 mb-4">
              Past Records
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <SessionCard
            startTime={item.startTime}
            endTime={item.endTime}
            duration={item.duration}
          />
        )}
        ListEmptyComponent={
          <Text className="text-gray-400 text-center mt-8">
            No sessions recorded yet
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

