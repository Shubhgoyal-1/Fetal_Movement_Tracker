import { SessionRecord } from "@/types/type";
import { formatSessionDate } from "@/utils/date";
import { View, Text } from "react-native";

const SessionCard = ({ startTime, duration }: SessionRecord) => {
    return (
        <View className="mx-5 my-1 flex-row items-center justify-between rounded-2xl border-2 border-gray-200 bg-white px-5 py-6">
            <Text numberOfLines={1} className="text-[17px] font-semibold text-black">
                {formatSessionDate(startTime)}
            </Text>

            <Text className="text-[17px] font-semibold text-black">
                {duration} mins
            </Text>
        </View>
    );
};

export default SessionCard;
