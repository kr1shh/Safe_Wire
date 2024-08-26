import { useState } from "react"
import UserContext from "./userContext"


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(false)

  return (
    <UserContext.Provider
    value={{ user,setUser }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider