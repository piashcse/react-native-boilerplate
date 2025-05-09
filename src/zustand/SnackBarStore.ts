import { create } from 'zustand';

type SnackbarState = {
  visible: boolean;
  message: string;
  showSnackbar: (message: string) => void;
  hideSnackbar: () => void;
};

export const useSnackbarStore = create<SnackbarState>((set) => ({
  visible: false,
  message: '',
  showSnackbar: (message: string) =>
    set({
      visible: true,
      message,
    }),
  hideSnackbar: () =>
    set({
      visible: false,
      message: '',
    }),
}));
