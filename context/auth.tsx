import { auth } from "@/firebase/config";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

export enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest",
}

export type User = {
    email: string;
    name: string;
    role: UserRole;
}

type AuthContextType  = {
    user: User | undefined;
    loading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({
    children
}: {children: React.ReactNode} ) {

    const [user, setUser] = useState<User | undefined>(undefined);
    const [loading, setIsLoading] = useState(false);


    const router = useRouter();
    
       useEffect(() => {
       }, [])

    useEffect(() => {
          // fetch user
          checkUser()
    }, [])

    const checkUser = async() => {
     
    
        setIsLoading(true)
        const unsub =  onAuthStateChanged(auth, user => {
              console.log("USER!", user?.email)
              if(user){
                setUser({email: user?.email as string, name: user?.displayName as string, role: UserRole.User})
                router.replace("/(app)/(tabs)")
              } else {
                router.replace("/login")
              }
             
          });
      
        setIsLoading(false)
        return unsub;
    }

    return (
        <AuthContext.Provider value={{user, setUser, loading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if(context === undefined){
        throw new Error("Please wrap the component with Auth Provider");
    }

    return context;
} 