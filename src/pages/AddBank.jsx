import {  useContext, useState } from "react";
import logo from "../assets/logo.png"
import "./addBank.scss"
import { instance } from "../axios/instance";
import { useUserId } from "../hooks/useUserId";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";



const AddBank = () => {
 const [ bank,setBank ] = useState({
  name:"",
  accountNo:"",
  ifsc:"",
  branchName:"",
  bankName:"",
 })

 const { setUser } = useContext(UserContext)

  const user_id = useUserId()

  const navigate = useNavigate()


 const handleChange = (e)=>{
  const { name,value } = e.target;
  setBank((prevState)=>({
    ...prevState,
    [name]:value,
  }))
 }

 const handleSubmit = async(e)=>{
  e.preventDefault()
  if (!bank.name || !bank.accountNo || !bank.ifsc) {
    console.log("One or more fields are empty. Function terminated.");
    return;
  }
  await instance.post(`bankaccounts/create/${user_id}/`,{
    account_number : bank.accountNo,
    account_holder_name : bank.name,
    ifsc_code : bank.ifsc,
    bank_name : bank.bankName,
    branch_name: bank.branchName,
  })
  .then((res)=>{
    console.log(res);
    if(res.data.status === "ok"){
      toast.success(res.data.message)
      setTimeout(()=>{
        navigate("/dashboard")
      },2000)
    }else{
      toast.error(res.data.message);
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  
 }

  return (
    <>
    <Toaster></Toaster>
      <div className="add-container">
        <div className="add-content">
          <div className="add-title">
            <img src={logo} alt="logo" />
            <h1>Add your bank.</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name as per bank"
              name="name"
              onChange={handleChange}
              value={bank.name}
              required
            />
            <label htmlFor="ac-no">Account No.</label>
            <input
              type="text"
              placeholder="Enter Your Account No."
              onChange={handleChange}
              name="accountNo"
              value={bank.accountNo}
              required
            />
            <label htmlFor="ifsc">IFSC Code</label>
            <input
              type="text"
              placeholder="Enter your IFSC code"
              onChange={handleChange}
              name="ifsc"
              value={bank.ifsc}
              required
            />
            <label htmlFor="ifsc">Bank Name</label>
            <input
              type="text"
              placeholder="Enter your bank name"
              onChange={handleChange}
              name="bankName"
              value={bank.bankName}
              required
            />
            <label htmlFor="ifsc">Branch Name</label>
            <input
              type="text"
              placeholder="Enter your branch"
              onChange={handleChange}
              name="branchName"
              value={bank.branchName}
              required
            />
            <div className="add-btn">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBank