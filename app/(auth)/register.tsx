import { ThemedText } from "@/components/themed-text";
import { useRouter } from "expo-router";
import { auth } from "@/firebase/config";

import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/context/auth";

export default function RegisterScreen(){
     const { loading, setIsLoading  } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

     const router = useRouter();

    const handleRegister = async () => {
         setIsLoading(true);
        createUserWithEmailAndPassword(auth, email.trim(), password)
        .then(() => {
            router.replace("/login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert( errorMessage)
        })
        .finally(() => setIsLoading(false));
  };

    return (
        <View>
            <ThemedText type="title">Register</ThemedText>
            <TextInput placeholder="email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
            <TextInput placeholder="password" value={password} onChangeText={setPassword} />
            <Button title="Register" onPress={handleRegister}  />
        </View>
    )
}