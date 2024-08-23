import { FaUser } from "react-icons/fa6"
import "./profile.scss"
import { useState } from "react";

const Profile = () => {
    const [ activeCheck, setActiveCheck ] = useState(true)
  return (
    <>
      <div className="profile-container">
        <div className="profile-main">
          <FaUser/>
          <h2>User&apos;s Name</h2>
        </div>
        <div className="profile-content">
          <div className="profile-personal">
            <h3>Personal Details</h3>
            <span>
              <label>Username : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`}/>
            </span>
            <span>
              <label>Name : </label>
              <input type="text"  disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Phone : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Date of Birth : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Address : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Email : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>Password : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
          </div>
          <div className="profile-bank">
            <h3>Banking Details</h3>
            <span>
              <label>Banking Name : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>A/C No. : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
            </span>
            <span>
              <label>IFSC Code : </label>
              <input type="text" disabled={ activeCheck } className={`${!activeCheck&&"active"}`} />
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