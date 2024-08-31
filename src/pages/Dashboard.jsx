import "./dashboard.scss"
import { Nav } from "../components"
import { Outlet, useNavigate } from "react-router-dom"
import validate from "../auth/verifyJwt"
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext"
import { instance } from "../axios/instance"
import { useUserId } from "../hooks/useUserId"
import { Modal } from "../components"

const Dashboard = () => {  
  const navigate = useNavigate()
  const { user,setUser,isFraud,setIsFraud } = useContext(UserContext)
  const [ modalActive,setModalActive ] = useState(false)
  const [ message, setMessage ] = useState({
    count:0,
    title:"Tip of the Day",
    msg:""
  })
  console.log(user);
  
  const id = useUserId()
  useEffect(() => {
    if (!validate()) {
      console.log("validation failed")
      navigate("/login")
      return
    }
    
    const fetchData = async () => {
      const access = localStorage.getItem("access")
      console.log("token : ",access);
      
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
        console.log("removing token")
        localStorage.removeItem("access");
        navigate("/login");
      }
    };
  
    fetchData();
  }, [id, navigate, setUser]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const adiveRes = await instance.get("random/")
        console.log("random res : ",adiveRes);
        setMessage((prevState)=>({
          ...prevState,
          msg:adiveRes.data.text
        }))
        setModalActive(true);
      }
      catch(err){
        console.log(err);
      }
    }

    if(message.count === 0){
      setTimeout(()=>{
        fetchData();
      },3000)
    }
  },[])

  const fraudClose = ()=>{
    setIsFraud(false)
  }
  const modalClose = ()=>{
    setModalActive(false)
  }

  return (
    <>
    {
      isFraud || modalActive ? (
        <Modal
        title={isFraud?"Fraud Detected!":(modalActive?"Advice and Tip":"")}
        description={isFraud?"Fraud detected transaction failed!":(modalActive?message.msg:"")}
        color = { isFraud?"red":(modalActive&&"green")}
        activeToggle = { isFraud?fraudClose:(modalActive?modalClose:"") }
        />
      ):""
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