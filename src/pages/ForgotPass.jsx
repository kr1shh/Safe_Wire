import "./forgotPass.scss";
import { Background } from "../components";
import logo from "../assets/logo.png";
import { useState } from "react";
import documentTitle from "../extras/documentTitle";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const ForgotPass = () => {
  documentTitle("Recovery - Safe Wire");

  const [recData, setRecData] = useState({
    email: "",
    newPassword: "",
  });
  const [check, setCheck] = useState({
    email: "",
    loading: false,
  });

  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (!emailPattern.test(value)) {
      setCheck({
        email: "true",
      });
    } else {
      setCheck({
        email: "false",
      });
    }
  };

  const handleSubmit = async () => {
    if (recData.email === "" || !emailPattern.test(recData.email) ) {
      toast.error("Enter a Valid Email!");
      return;
    }

    console.log("send Clicked");
    setCheck({
      loading: true,
    });

    setTimeout(() => {
      setCheck({
        loading: false,
      });
    }, 2000);

    navigate("/updatepassword");
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
              style={
                check.email === "true"
                  ? { border: "1px solid red" }
                  : { border: "none" }
              }
            />
          </div>
          <button
            onClick={() => {
              handleSubmit("send");
            }}
          >
            Send
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

export default ForgotPass;
