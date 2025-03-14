import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { defaultDimension } from '@/src/config/AppConfig';
import { AppColors } from '@/src/constants/AppColors';

export const light = {
  ...MD3LightTheme,
  roundness: defaultDimension.borderRadius,
  colors: {
    ...MD3LightTheme.colors,
    primary: AppColors.light.primaryColor,
    ...AppColors.light,
  },
};

export const dark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: AppColors.light.primaryColor,
    ...AppColors.dark,
  },
  roundness: defaultDimension.borderRadius,
};
