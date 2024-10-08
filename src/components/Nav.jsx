import "./nav.scss"
import logo from "../assets/logo.png"
import { NavLink,Link, useNavigate } from "react-router-dom"
import { MdSpaceDashboard } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import { useContext } from "react";
import UserContext from "../context/userContext";

const Nav = () => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  
  const logOut = ()=>{
    localStorage.removeItem("access")
    navigate("/login")
  }
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-content-1">
            <div className="nav-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <NavLink
                    to={"/dashboard/summery"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending nav-link"
                        : isActive
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    <MdSpaceDashboard /> Summery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/transfer"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending nav-link"
                        : isActive
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    <BiTransferAlt />
                    Transfer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard/transactions"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending nav-link"
                        : isActive
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    <TbReport />
                    Transactions
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2">
            <div className="nav-profile">
              <Link to={"/dashboard/profile"}>
                <div className="pro-dp">
                  {/* <img src="" alt="" /> */}
                  <FaUser />
                </div>
                <div className="pro-detail">
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
              </Link>
            </div>
            <button onClick={logOut}>
              <LuLogOut />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav