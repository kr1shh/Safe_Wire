import "./register.scss";
import documentTitle from "../extras/documentTitle";
import { Background } from "../components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  documentTitle("SignUp - Safe Wire");

  const [check, setCheck] = useState({
    password: "",
    email: "",
  });
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    phone: "",
    dob: "",
    address: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      // Basic email regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the email is valid
      if (!emailPattern.test(value)) {
        setCheck({
          email: "true",
        });
      } else {
        setCheck({
          email: "false",
        });
      }
    }
  };

  const handleSubmit = async () => {
    const allFields = Object.values(userData).every(
      (value) => value.trim() !== ""
    );

    if (!allFields) {
      toast.error("All Field Required");
      return;
    }

    if (userData.password !== userData.confirmPass) {
      toast.error("Password Mismatch!");
      setCheck({
        password: "true",
      });

      setTimeout(() => {
        setCheck({
          password: "",
        });
      }, 2500);
      return;
    }

    //API Request

    toast.success("Success");
  };

  return (
    <>
      <div className="reg-container">
        <div className="reg-card">
          <div className="reg-title">
            <img src={logo} alt="Logo" />
            <h1>Sign Up</h1>
          </div>
          <div className="reg-content">
            <div className="reg-sec-1">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                required
                value={userData.username}
                onChange={handleInputChange}
                name="username"
              />
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={userData.fullName}
                onChange={handleInputChange}
                name="fullName"
              />
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="phone"
                required
                value={userData.phone}
                onChange={handleInputChange}
                name="phone"
              />
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                type="date"
                required
                value={userData.dob}
                onChange={handleInputChange}
                name="dob"
              />
            </div>
            <div className="reg-sec-2">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                value={userData.address}
                onChange={handleInputChange}
                name="address"
              ></textarea>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={userData.email}
                onChange={handleInputChange}
                name="email"
                style={
                  check.email === "true"
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
              />
              <label htmlFor="pass">Password</label>
              <input
                id="pass"
                type="password"
                required
                value={userData.password}
                onChange={handleInputChange}
                name="password"
              />
              <label htmlFor="cpass">Confirm Password</label>
              <input
                id="cpass"
                type="text"
                required
                value={userData.confirmPass}
                onChange={handleInputChange}
                name="confirmPass"
                style={
                  check.password === "true"
                    ? { border: "1px solid red" }
                    : { border: "none" }
                }
              />
            </div>
          </div>
          <button onClick={handleSubmit}>Sign Up</button>
          <Link to={"/login"}>Already have an account?!</Link>
        </div>
      </div>

      <Toaster position="top-center" />

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

export default Register;
