import { ThemedText } from "@/components/themed-text";
import { useAuth, User, UserRole } from "@/context/auth";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AdminScreen(){

    const { user, setUser } = useAuth();

    const handleBecomeAdmin = () => {
        setUser(prevState => ({...prevState, role: UserRole.Admin} as User))
    }

    if(user?.role !== UserRole.Admin){
        return (
            <SafeAreaView>
                <ThemedText> You don't have access</ThemedText>
                <Button title="Become an Admin" onPress={handleBecomeAdmin} />
            </SafeAreaView>
        )
    }
    
    return (
        <SafeAreaView>
            <ThemedText>Hello Admin {user?.name}</ThemedText>
        </SafeAreaView>
    )
}