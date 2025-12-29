import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    ImageBackground,
    Pressable,
    Text,
    View,
    Image
} from "react-native";
import Leap from '@/assets/images/Leap.png'
import WomenImage from "@/assets/images/WomenImage.jpg";

const WomenCard = () => {
    return (
        <View className="h-[160px] rounded-3xl mb-8 shadow-black shadow-2xl">
            <View className="overflow-hidden rounded-3xl h-full">
                <ImageBackground
                    source={WomenImage}
                    className="flex-1 p-3 justify-between"
                    imageStyle={{ borderRadius: 24 }}
                >
                    <LinearGradient
                        colors={["rgba(81, 81, 81, 0.92)","rgba(255, 255, 255, 0)" ,"rgba(95, 95, 95, 0.85)"]}
                        style={{ position: "absolute", inset: 0 }}
                    />

                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center">
                            <Image source={Leap} className="w-[48px] h-[24px]" />
                            <Text className="font-extrabold text-[17px] text-black">Articles</Text>
                        </View>

                        <Pressable className="flex-row items-center bg-white px-4 py-2 rounded-full">
                            <Feather name="bookmark" size={18} color="#000" />
                            <Text className="text-[14px] mx-2 font-semibold">Save</Text>
                        </Pressable>
                    </View>

                    <Text className="text-white text-[26px] font-extrabold">
                        DFM (fetal movement)
                    </Text>
                </ImageBackground>
            </View>
        </View>
    );
};


export default WomenCard;
