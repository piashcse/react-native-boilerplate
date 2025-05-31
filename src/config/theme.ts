import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { defaultDimension } from '@/src/config/appConfig';
import { appColors } from '@/src/constants/appColors';

export const light = {
  ...MD3LightTheme,
  roundness: defaultDimension.borderRadius,
  colors: {
    ...MD3LightTheme.colors,
    primary: appColors.light.primaryColor,
    ...appColors.light,
  },
};

export const dark = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: appColors.light.primaryColor,
    ...appColors.dark,
  },
  roundness: defaultDimension.borderRadius,
};
