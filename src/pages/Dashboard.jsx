import "./dashboard.scss"
import { Nav } from "../components"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
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