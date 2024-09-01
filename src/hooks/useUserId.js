import { jwtDecode } from "jwt-decode";

export const useUserId= () => {
    let id = localStorage.getItem("access")
    if (typeof id !== "string") {
      console.log("id is not a string");
      return false;
    } else {
      let token = jwtDecode(id);
      if (token) {
        return token.user_id;
      }
    }
}