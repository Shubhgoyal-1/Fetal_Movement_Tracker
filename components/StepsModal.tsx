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
        <View className="bg-white rounded-3xl px-5 pt-5 pb-8 max-h-[80%]">
          <Pressable
            onPress={onClose}
            className="absolute right-4 top-4 w-10 h-10 rounded-full items-center justify-center border border-gray-300"
          >
            <Feather name="x" size={20} color="#000" />
          </Pressable>

          <View className="flex-row items-center mb-4">
            <Text className="text-2xl mr-2">👣</Text>
            <Text className="text-xl font-extrabold text-black">
              Steps to count fetal kicks
            </Text>
          </View>
          
          <ScrollView showsVerticalScrollIndicator={false}>
            {steps.map((step, index) => (
              <View
                key={index}
                className={`p-4 rounded-xl mb-3 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <Text className="text-base font-semibold text-black">
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
