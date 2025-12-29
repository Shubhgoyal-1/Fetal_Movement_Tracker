import { useEffect, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SessionRecord } from "@/types/type";
import { useSessionStore } from "@/store/session.store";

const Stopwatch = () => {

    const addSession = useSessionStore(state => state.addSession);


    const [isRunning, setIsRunning] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const startTimeRef = useRef<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setElapsedSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    const startTimer = () => {
        startTimeRef.current = Date.now();
        setElapsedSeconds(0);
        setIsRunning(true);
    };

    const stopTimer = async () => {
        if (!startTimeRef.current) return;

        const endTime = Date.now();
        const duration = Math.max(1, Math.round(elapsedSeconds / 60));

        const session: SessionRecord = {
            startTime: startTimeRef.current,
            endTime,
            duration,
        };

        await addSession(session);

        setIsRunning(false);
        setElapsedSeconds(0);
        startTimeRef.current = null;
    };

    const toggleTimer = () => {
        isRunning ? stopTimer() : startTimer();
    };
    const minutes = Math.floor(elapsedSeconds / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (elapsedSeconds % 60)
        .toString()
        .padStart(2, "0");
        
    return (
        <View className="items-center justify-center mt-6">

            <View className="relative mb-10 items-center">
                <View className="bg-white px-5 py-3 rounded-2xl">
                    <Text
                        numberOfLines={2}
                        className="text-2xl font-semibold text-black text-center"
                    >
                        Stop recording after {"\n"} 10 kicks
                    </Text>
                </View>

                <View className="absolute -bottom-2 w-4 h-4 bg-white rotate-45" />
            </View>

            <View className="w-72 h-44 rounded-full border-2 border-white p-3 items-center justify-center mb-8 bg-white/30">
                <View className="w-64 h-36 rounded-full border-2 border-white p-3 items-center justify-center bg-white/30">
                    <View className="w-52 h-28 rounded-full border-2 border-white items-center justify-center bg-white/30">
                        <Text className="text-[40px] font-extrabold text-[#E56A54]">
                            {minutes}:{seconds}
                        </Text>
                    </View>
                </View>
            </View>

            <Pressable
                onPress={toggleTimer}
                className="w-20 h-20 rounded-full mt-4 bg-white items-center justify-center"
            >
                {isRunning ? (
                    <Ionicons name="stop" size={40} color="#000000ff" />
                ) : (
                    <Ionicons className="absolute right-4" name="play" size={40} color="#000000ff" />
                )}
            </Pressable>
            <Pressable onPress={toggleTimer} className="w-full border border-black rounded-full bg-white py-4 mt-20">
                <Text className="text-center text-lg font-semibold">
                    Save
                </Text>
            </Pressable>
        </View>
    );
};

export default Stopwatch;
