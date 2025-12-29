import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionRecord } from "@/types/type";

const STORAGE_KEY = "DFM_SESSIONS";

interface SessionState {
  sessions: SessionRecord[];
  loadSessions: () => Promise<void>;
  addSession: (session: SessionRecord) => Promise<void>;
}

export const useSessionStore = create<SessionState>((set, get) => ({
  sessions: [],

  loadSessions: async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) return;

    const parsed: SessionRecord[] = JSON.parse(data);

    parsed.sort((a, b) => b.startTime - a.startTime);

    set({ sessions: parsed });
  },

  addSession: async (session) => {
    const updated = [session, ...get().sessions];

    set({ sessions: updated });

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  },

}));
