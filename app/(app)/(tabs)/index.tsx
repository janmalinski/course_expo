import { ThemedText } from '@/components/themed-text';
import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import { ActivityIndicator, Alert, Button, StyleSheet, View } from 'react-native';
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import * as Updates from "expo-updates";

import { auth } from "@/firebase/config";
import { useEffect } from 'react';

export default function HomeScreen() {

 const router = useRouter();

 const { isUpdateAvailable, isUpdatePending } = Updates.useUpdates();


 useEffect(() => {
  if(isUpdateAvailable){
    Updates.reloadAsync();
  }
 }, [isUpdateAvailable])

//  useFocusEffect(
//     // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
//     useCallback(() => {
//       // Invoked whenever the route is focused.
//       console.log("Hello, I'm focused!");

//       // Return function is invoked whenever the route gets out of focus.
//       return () => {
//         console.log('This route is now unfocused.');
//       };
//     }, []),
//    );

// const ref = useNavigationContainerRef();

// useEffect(() => {
//   if(ref){
//     ref.current?.addListener("state", (event) => {
//       console.log(event.data.state?.routeNames)
//     })
//   }
// }, []);

    // const pathname = usePathname();

//  const { routes } = useRootNavigationState();

//  console.log(JSON.stringify(routes, null, 2))

// const segments = useSegments();

// console.log("SEGMENTS", segments)


const { setIsLoading, loading, setUser } = useAuth();

   if(loading) return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size="large"/>
      </View>);

    const handleSignOut= async() => {
      try {
        setIsLoading(true)
        await signOut(auth);
        setUser(undefined)
       router.replace("/(auth)/login");
      } catch (error) {
        Alert.alert(error.message)
      } finally {
        setIsLoading(false)
      }
    }

  return (
   <View style={styles.container}>
    <ThemedText type='title'>Home</ThemedText>
     <Button title='Fetch Updates' color="red" onPress={async()=> await Updates.fetchUpdateAsync()} />
    <Button title='Check for Updates' color="red" onPress={async()=> await Updates.checkForUpdateAsync()} />
    <Button title='Log Out' color="red" onPress={handleSignOut} />
    <Link href={{pathname: "/deeplink/[deeplink]", params: {deeplink: "hello from tabs"}}} >Go to deeplink</Link>
   </View>
  );
}

export const styles = StyleSheet.create(({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "brown",
  }
}))

