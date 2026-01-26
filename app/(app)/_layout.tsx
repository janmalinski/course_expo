import { useAuth } from '@/context/auth';
import { Redirect, Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';

export const unstable_settings = {
  initialRouteName: "(tabs)"
}

export default function AppLayout() {

    const { loading, user } = useAuth();
  
     if(loading) return (
     <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
         <ActivityIndicator size="large"/>
     </View>);

    if(user === undefined) return <Redirect href="/(auth)/login" />

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[deeplink]/deeplink" options={{ presentation: "modal" }} />
      </Stack>
  );
}
