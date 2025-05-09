import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import configureAppStore from '@/src/store/Store';
import { i18nLocale } from '@/src/localization/i18nLocale';
import { PaperProvider } from 'react-native-paper';
import { dark, light } from '@/src/config/theme';
import * as Font from '@expo-google-fonts/inter';
import NetworkMonitor from '@/src/components/network-monitor/NetworkMonitor';
import CentralLoading from '@/src/components/base/loading/CentralLoading';
import AppSnackBar from '@/src/components/snack-bar/AppSnackBar';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const store = configureAppStore();
  const [loaded] = useFonts({
    Inter_400Regular: Font.Inter_400Regular,
    Inter_600SemiBold: Font.Inter_600SemiBold,
    Inter_500Medium: Font.Inter_500Medium,
    Inter_700Bold: Font.Inter_700Bold,
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
        <StatusBar style="auto" />
        <I18nextProvider i18n={i18nLocale}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="home" />
            <Stack.Screen name="+not-found" />
          </Stack>
          <NetworkMonitor />
          <CentralLoading />
          <AppSnackBar />
        </I18nextProvider>
      </PaperProvider>
    </Provider>
  );
}
