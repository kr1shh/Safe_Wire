import "./forgotPass.scss";
import { Background } from "../components";
import logo from "../assets/logo.png";
import { useState } from "react";
import documentTitle from "../extras/documentTitle";
import { Link } from "react-router-dom";
import  { Toaster,toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";


const UpdatePass = () => {
    documentTitle("Update Password - Safe Wire");

    const [recData, setRecData] = useState({
      email: "",
      newPassword: "",
    });
    const [check, setCheck] = useState({
      emailCheck: true,
      loading: false,
    });

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRecData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async () => {
      if( recData.newPassword === "") {
          toast.error("Enter a Strong Password!");
          return;
      }
        setCheck({
          loading:true
        })
  
        setTimeout(()=>{
          setCheck({
              loading:false
          })
        },2000)
    };
  
    return (
      <>
        <div className="rec-container">
          {check.loading ? (
            <div className="rec-loading">
              <PropagateLoader color="#FF930F" />
            </div>
          ) : (
            ""
          )}
            <div className="rec-card">
              <div className="rec-title">
                <img src={logo} alt="Logo" />
                <h1>Update Password</h1>
              </div>
              <div className="rec-content">
                <label htmlFor="email">New Password</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  value={recData.email}
                  onChange={handleChange}
                  placeholder="Enter New Password."
                />
              </div>
              <button
                onClick={() => {
                  handleSubmit("update");
                }}
              >
                Update
              </button>
              <Link to={ "/login" }>Back to login!</Link>
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

export default UpdatePass