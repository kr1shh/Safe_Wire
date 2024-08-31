import "./forgotPass.scss";
import { Background } from "../components";
import logo from "../assets/logo.png";
import {  useState } from "react";
import documentTitle from "../extras/documentTitle";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { instance } from "../axios/instance";

const ForgotPass = () => {
  documentTitle("Recovery - Safe Wire");

  const [recData, setRecData] = useState({
    email: "",
    newPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {

    await instance
      .post(`api/password_reset/`, {
        email: recData.email,
        new_password: recData.newPassword,
      })
      .then((res) => {
        console.log("password reset response :\n",res);
        toast.success(res.data.detail)
        setTimeout(()=>{
          navigate("/login")
        },1500)
      })
      .catch((err)=>{
        console.log("password reset error\n",err);
        toast.error(err.message)
      })
  };

  return (
    <>
      <div className="rec-container">
        <div className="rec-card">
          <div className="rec-title">
            <img src={logo} alt="Logo" />
            <h1>Recover Password</h1>
          </div>
          <div className="rec-content">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={recData.email}
              onChange={handleChange}
              placeholder="Enter Your Email."
            />
            <label htmlFor="newpass">New Password</label>
            <input
              type="password"
              name="newPassword"
              id="newpass"
              required
              value={recData.newPassword}
              onChange={handleChange}
              placeholder="Enter Your New Password."
            />
          </div>
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Send
          </button>
          <Link to={"/login"}>Back to login!</Link>
        </div>
      </div>

      <Toaster />

      <div
        style={{
          width: "100%",
          height: "99vh",
          position: "absolute",
          top: "0",
          zIndex: 1,
        }}
      >
        <Background />
      </div>
    </>
  );
};

export default ForgotPass;
