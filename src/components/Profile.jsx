import { FaUser } from "react-icons/fa6"
import "./profile.scss"
import { useContext, useState } from "react";
import documentTitle from "../extras/documentTitle";
import UserContext from "../context/userContext";
const Profile = () => {
  documentTitle("Profile - SafeWire")
    const [ activeCheck, setActiveCheck ] = useState(true)
    const { user } = useContext(UserContext)

  return (
    <>
      <div className="profile-container">
        <div className="profile-main">
          <FaUser/>
          <h2>{ user.name }</h2>
        </div>
        <div className="profile-content">
          <div className="profile-personal">
            <h3>Personal Details</h3>
            <span>
              <label>Username : </label>
              <input type="text" value={user.userName} disabled={ activeCheck } className={`${!activeCheck&&"active"}`}/>
            </span>
            <span>
              <label>Name : </label>
              <input type="text" value={user.name}  disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Phone : </label>
              <input type="text" value={user.phone} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Date of Birth : </label>
              <input type="date" value={ user.dob } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Address : </label>
              <input type="text" value={ user.address } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Email : </label>
              <input type="text" value={ user.email } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Password : </label>
              <input type="password" value={user.pass} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
          </div>
          <div className="profile-bank">
            <h3>Banking Details</h3>
            <span>
              <label>Banking Name : </label>
              <input type="text" value={user.bank.name} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>A/C No. : </label>
              <input type="text" value={user.bank.accountNo} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>IFSC Code : </label>
              <input type="text" value={user.bank.ifsc} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
          </div>
        </div>
        {
            activeCheck ? (
                <button onClick={ ()=>setActiveCheck(!activeCheck) }>Edit</button>
            ):(
                <div className="profile-update">
                    <button onClick={ ()=>setActiveCheck(!activeCheck) }>cancel</button>
                    <button>update</button>
                </div>
            )
        }

      </div>
    </>
  );
}

export default Profile