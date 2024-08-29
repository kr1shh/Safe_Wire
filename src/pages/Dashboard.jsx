import "./dashboard.scss"
import { Nav } from "../components"
import { Outlet, useNavigate } from "react-router-dom"
import validate from "../auth/verifyJwt"
import { useContext, useEffect } from "react"
import UserContext from "../context/userContext"
import { instance } from "../axios/instance"
import { useUserId } from "../hooks/useUserId"
import { Modal } from "../components"

const Dashboard = () => {  
  const navigate = useNavigate()
  const { user,setUser,isFraud } = useContext(UserContext)
  console.log(user);
  
  const id = useUserId()
  useEffect(() => {
    if (!validate()) {
      navigate("/login")
      return
    }
    
    const fetchData = async () => {
      try {
        const userResponse = await instance.get(`users/detail/${id}/`);
        setUser(prevState => ({
          ...prevState,
          name: userResponse.data.data.name,
          email: userResponse.data.data.email,
          userName: userResponse.data.data.username,
          phone: userResponse.data.data.phone,
          address: userResponse.data.data.address,
          dob: userResponse.data.data.dob,
        }));
  
        const bankResponse = await instance.get(`bankaccounts/${id}/`);
        if (bankResponse.data.data[0]) {
          setUser(prevState => ({
            ...prevState,
            bank: {
              name: bankResponse.data.data[0].account_holder_name,
              accountNo: bankResponse.data.data[0].account_number,
              ifsc: bankResponse.data.data[0].ifsc_code,
            },
          }));
        }  
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };
  
    fetchData();
  }, [id, navigate, setUser]);


  return (
    <>
    {
      isFraud&&(
        <Modal
        title={"Fraud Detected"}
        description={"hello how are you"}/>
      )
    }
      <Nav/>
    
      <div className="layout-container">
        <div className="dash-layout">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Dashboard