import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {  Slot, useRouter } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthContextProvider } from '@/context/auth';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthContextProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme }>
        <Slot />
      </ThemeProvider>
    </AuthContextProvider>
 
  );
}
