import "./dashboard.scss"
import { Nav } from "../components"
import { Outlet, useNavigate } from "react-router-dom"
import validate from "../auth/verifyJwt"
import { useEffect } from "react"

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!validate()){
      navigate("/login")
    }
  })

  return (
    <>
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