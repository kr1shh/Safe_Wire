import { useState } from "react"
import UserContext from "./userContext"


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
      id: "",
      userName: "",
      name: "",
      phone: "",
      dob: "",
      address: "",
      email: "",
      pass: "",
      bank: {
        name: "",
        accountNo: "",
        ifsc: "",
      },
    });

    const [ isFraud, setIsFraud] = useState(false)

  return (
    <UserContext.Provider
    value={{ user,setUser,isFraud,setIsFraud }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider