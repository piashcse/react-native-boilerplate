import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import configureAppStore from '@/src/redux/store/Store';
import { i18nLocale } from '@/src/localization/i18nLocale';
import { PaperProvider } from 'react-native-paper';
import { dark, light } from '@/src/config/theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const store = configureAppStore();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={colorScheme === 'dark' ? dark : light}>
        <I18nextProvider i18n={i18nLocale}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home" />
            <Stack.Screen name="+not-found" />
          </Stack>
        </I18nextProvider>
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  );
}
