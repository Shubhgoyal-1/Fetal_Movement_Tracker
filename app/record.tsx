import { View, Text, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stopwatch from "@/components/StopWatch";
import { useEffect, useState } from "react";
import StepsModal from "@/components/StepsModal";
import RecordBackground from '@/assets/images/RecordBackground.png'
import Divider from "@/components/Divider";
import { useLocalSearchParams, useRouter } from "expo-router";
const Record = () => {
    const { showInfo } = useLocalSearchParams();
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (showInfo === "true") {
            setShowModal(true);
        }
    }, [showInfo]);

    return (
        <>
            <Divider />
            <ImageBackground
                source={RecordBackground}
                className="flex-1"
                resizeMode="cover"
                imageStyle={{ opacity: 0.15 }}
            >
                <View className="flex-1">
                    <SafeAreaView className="flex-1 px-6">
                        <View className="flex-1 justify-center">
                            <Stopwatch />
                        </View>
                        <View className="pb-8">
                            <Pressable onPress={() => setShowModal(true)}>
                                <Text numberOfLines={2} className="text-center underline text-2xl font-medium">
                                    What if I am not getting{"\n"}enough kicks?
                                </Text>
                            </Pressable>
                        </View>
                    </SafeAreaView>
                    <StepsModal
                        visible={showModal}
                        onClose={() => {
                            setShowModal(false);
                            router.setParams({ showInfo: "false" })
                        }}
                    />
                </View>
            </ImageBackground>
        </>
    );
};

export default Record;
