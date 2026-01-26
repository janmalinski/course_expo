import { ThemedText } from "@/components/themed-text";
import { Link, useRouter } from "expo-router";
import { auth } from "@/firebase/config";

import { useEffect, useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth, UserRole } from "@/context/auth";
import { getItems } from "@/api/getUsers";

export default function LoginScreen(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const { loading, setIsLoading, setUser  } = useAuth();
    const router = useRouter();

    useEffect(() => {
      getItems()
    } , []);

    const handleLogin = async () => {
     setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email.trim(), password);
      setUser({email: res.user.email as string, name: res.user?.displayName as string, role: UserRole.User})
      router.replace("/(app)/(tabs)");
    } catch (e: any) {
      Alert.alert("Login error", e.message);
    } finally   {
         setIsLoading(false);
    };
  };

    return (
        <View>
            <TextInput placeholder="email" value={email} onChangeText={setEmail} autoCapitalize="none" />
            <TextInput placeholder="password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Log in" onPress={handleLogin}  />
            <Link href="/(auth)/register">Register</Link>
        </View>
    )
}