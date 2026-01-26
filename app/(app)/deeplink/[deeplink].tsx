import { ThemedText } from '@/components/themed-text';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function DeeplinkScreen() {

    const { deeplink } = useLocalSearchParams();

    console.log(deeplink)

  return (
   <View style={styles.container}>
    <ThemedText type='title'>Deeplink Screen, params: {deeplink}</ThemedText>
   </View>
  );
}

export const styles = StyleSheet.create(({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
}))

