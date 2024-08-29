import { jwtDecode } from "jwt-decode";

export const useUserId= () => {
    let id = localStorage.getItem("access")
    let token = jwtDecode(id)
    if(token){
        return token.user_id
    }
    return
}