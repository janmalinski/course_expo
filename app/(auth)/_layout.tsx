
import { useAuth } from "@/context/auth";
import { Redirect, Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function AuthLayout() {
    const { loading, user } = useAuth()
      
    if(loading) return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large"/>
    </View>);

    return (
    <Stack>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
    </Stack>
    
)
    
}