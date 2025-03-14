import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SingInSignUpResponse } from '@/src/types/ApiResponse';

interface BoilerPlateStore {
  user: SingInSignUpResponse | null;
  saveUser: (user: SingInSignUpResponse) => void;
  getUser: () => SingInSignUpResponse | null;
  clearUser: () => void;
}

export const useBoilerPlateStore = create<BoilerPlateStore>()(
  persist(
    (set, get) => ({
      user: null,
      userType: null,
      isOnboarding: false,
      isProfileCompleted: false,
      fcmToken: null,
      points: 0,
      saveUser: (user: SingInSignUpResponse) => {
        set({ user });
      },
      clearUser: () => {
        set({ user: null });
      },
      getUser: () => {
        return get().user;
      },
    }),
    {
      name: '@BoilerPlateStore',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
