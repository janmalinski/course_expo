import { API_BASE_URL } from "@/lib/api-client/apiClient"
import axios from "axios"

export const getItems = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}/posts?_limit=30`)
        return res.data;
    } catch (error: unknown) {
        if(error instanceof Error){
        console.log("ERROR_STATUS", error.message)
        alert(error.message)
        }
    }
} 