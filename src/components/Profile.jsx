import { FaUser } from "react-icons/fa6"
import "./profile.scss"
import { useContext, useState } from "react";
import documentTitle from "../extras/documentTitle";
import UserContext from "../context/userContext";
import { instance } from "../axios/instance";
import { useUserId } from "../hooks/useUserId";
import toast, { Toaster } from "react-hot-toast";
const Profile = () => {
  documentTitle("Profile - SafeWire")
    const [ activeCheck, setActiveCheck ] = useState(true)
    const { user,setUser } = useContext(UserContext)

    const id = useUserId()

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      setUser((prevState) => {
        if (name.includes("bank.")) {
          const bankField = name.split(".")[1];
          return {
            ...prevState,
            bank: {
              ...prevState.bank,
              [bankField]: value,
            },
          };
        } else {
          return {
            ...prevState,
            [name]: value,
          };
        }
      });
    };

    const handleSubmit=async ()=>{
      try{
        const updateRes = await instance.put(`user/update/${id}/`,user)
        console.log(updateRes)
        toast.success(updateRes.data.message)
      }catch(err){
        console.log("profile upadate error: ",err)
      }
    }
    

  return (
    <>
      <Toaster/>
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
              <input type="text" value={user.userName} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="userName" onChange={handleChange}/>
            </span>
            <span>
              <label>Name : </label>
              <input type="text" value={user.name}  disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="name" onChange={handleChange}/>
            </span>
            <span>
              <label>Phone : </label>
              <input type="text" value={user.phone} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="phone" onChange={handleChange}/>
            </span>
            <span>
              <label>Date of Birth : </label>
              <input type="date" value={ user.dob } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="dob" onChange={handleChange}/>
            </span>
            <span>
              <label>Address : </label>
              <input type="text" value={ user.address } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="address" onChange={handleChange}/>
            </span>
            <span>
              <label>Email : </label>
              <input type="text" value={ user.email } disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="email" onChange={handleChange}/>
            </span>
            <span>
              <label>Password : </label>
              <input type="password" value={user.pass} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="pass" onChange={handleChange}/>
            </span>
          </div>
          <div className="profile-bank">
            <h3>Banking Details</h3>
            <span>
              <label>Banking Name : </label>
              <input type="text" value={user.bank.name} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="bank.name" onChange={handleChange}/>
            </span>
            <span>
              <label>A/C No. : </label>
              <input type="text" value={user.bank.accountNo} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="bank.accountNo" onChange={handleChange}/>
            </span>
            <span>
              <label>IFSC Code : </label>
              <input type="text" value={user.bank.ifsc} disabled={ activeCheck } className={`${!activeCheck&&"active"}`} name="bank.ifsc" onChange={handleChange}/>
            </span>
          </div>
        </div>
        {
            activeCheck ? (
                <button onClick={ ()=>setActiveCheck(!activeCheck) }>Edit</button>
            ):(
                <div className="profile-update">
                    <button onClick={ ()=>setActiveCheck(!activeCheck) }>cancel</button>
                    <button onClick={handleSubmit}>update</button>
                </div>
            )
        }

      </div>
    </>
  );
}

export default Profile