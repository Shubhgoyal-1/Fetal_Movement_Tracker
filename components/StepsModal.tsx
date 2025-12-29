import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface StepsModalProps {
  visible: boolean;
  onClose: () => void;
}

const steps = [
  "Choose a time when you are least distracted or when you typically feel the fetus move.",
  "Get comfortable. Lie on your left side or sit with your feet propped up.",
  "Place your hands on your belly.",
  "Start a timer or watch the clock.",
  "Count each kick. Keep counting until you get to 10 kicks / flutters / swishes / rolls.",
  "Once you reach 10 kicks, jot down how many minutes it took.",
];

const StepsModal = ({ visible, onClose }: StepsModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/40 justify-center p-4">
        <Pressable
          onPress={onClose}
          className="w-20 h-20 self-end rounded-full items-center mb-2 justify-center border border-gray-300"
        >
          <Feather name="x" size={30} color="#000" />
        </Pressable>
        <View className="bg-transparent border border-white rounded-2xl p-1 max-h-[80%]">
           <View className="flex-row items-center mb-2 bg-white p-2 rounded-2xl">
              <Text className="text-[28px] mr-2">👣</Text>
              <Text className="text-[28px] font-extrabold text-black">
                Steps to count fetal kicks
              </Text>
          </View>

          <ScrollView className="rounded-2xl" showsVerticalScrollIndicator={false}>
            {steps.map((step, index) => (
              <View
                key={index}
                className={`p-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-200"
                  }`}
              >
                <Text className="text-[17px] font-semibold text-black">
                  {index + 1}. {step}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default StepsModal;
