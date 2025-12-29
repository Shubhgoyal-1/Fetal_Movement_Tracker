import { SessionRecord } from "@/types/type";
import { formatSessionDate } from "@/utils/date";
import { View, Text } from "react-native";

const SessionCard = ({ startTime, duration }: SessionRecord) => {
    const minutes = Math.floor(duration / 60)
        .toString()
        .padStart(2, "0");
    const seconds = (duration % 60)
        .toString()
        .padStart(2, "0");
    return (
        <View className="mx-5 my-1 flex-row items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-5 py-6">
            <Text numberOfLines={1} className="text-[17px] font-semibold text-black">
                {formatSessionDate(startTime)}
            </Text>

            <Text className="text-[17px] font-semibold text-black">
                {minutes}:{seconds}
            </Text>
        </View>
    );
};

export default SessionCard;
