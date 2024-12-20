import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/verify" options={{ headerShown: false }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: false }} />
        <Stack.Screen name="auth/driverform" options={{ headerShown: false }} />
        <Stack.Screen name="auth/imageUpload/registration" options={{ headerShown: false }} />
        <Stack.Screen name="auth/imageUpload/insurance" options={{ headerShown: false }} />
        <Stack.Screen name="auth/imageUpload/vehicle" options={{ headerShown: false }} />
        <Stack.Screen name="auth/postRide/postride" options={{ headerShown: false }} /> 
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}