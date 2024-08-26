import { FaUser } from "react-icons/fa6"
import "./profile.scss"
import { useState } from "react";
import { userDumData } from "../data/userData";

const Profile = () => {
    const [ activeCheck, setActiveCheck ] = useState(true)
  return (
    <>
      <div className="profile-container">
        <div className="profile-main">
          <FaUser/>
          <h2>{ userDumData[1].name }</h2>
        </div>
        <div className="profile-content">
          <div className="profile-personal">
            <h3>Personal Details</h3>
            <span>
              <label>Username : </label>
              <input type="text" value={userDumData[1].userName} disabled={ activeCheck } className={`${!activeCheck&&"active"}`}/>
            </span>
            <span>
              <label>Name : </label>
              <input type="text" value={userDumData[1].name}  disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Phone : </label>
              <input type="text" value={userDumData[1].phone} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Date of Birth : </label>
              <input type="date" value={ userDumData[1].dob } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Address : </label>
              <input type="text" value={ userDumData[1].address } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Email : </label>
              <input type="text" value={ userDumData[1].email } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Password : </label>
              <input type="password" value={userDumData[1].pass} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
          </div>
          <div className="profile-bank">
            <h3>Banking Details</h3>
            <span>
              <label>Banking Name : </label>
              <input type="text" value={userDumData[1].bank.name} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>A/C No. : </label>
              <input type="text" value={userDumData[1].bank.accountNo} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>IFSC Code : </label>
              <input type="text" value={userDumData[1].bank.ifsc} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
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