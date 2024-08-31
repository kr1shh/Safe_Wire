import "./login.scss";
import { Background, Loading } from "../components";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import documentTitle from "../extras/documentTitle";
import { instance } from "../axios/instance";
import toast, { Toaster } from "react-hot-toast";
import validate from "../auth/verifyJwt";



const Login = () => {
  documentTitle("Login - Safe Wire");

  const [passToggle, setPassToggle] = useState(false);
  const [ loading,setLoading ] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name,value } = e.target;
    setCredentials(prevState=>({
      ...prevState,
      [ name ]:value
    }))
  }

  const handleSubmit = async() => {
    if(!credentials.password && !credentials.username) {
      toast.error("Username and Password Required.");
      return
    }


    //API Call
    setLoading(true)

    await instance
      .post("login/", {
        username: credentials.username,
        password: credentials.password,
      })
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.error);
        setCredentials({
          username: "",
          password:"",
        })
      })
      .finally(()=>{
        setLoading(false)
      })
  }


  useEffect(()=>{
    if(validate()){
      navigate("/dashboard")
    }else{
      navigate("/login")
    }
  },[])

  return (
    <>
      <Toaster/>
      {
        loading&&(<Loading/>)
      }
      <div className="login-container">
        <div className="login-card">
          <div className="title">
            <img src={logo} alt="Logo" />
            <h1>Login</h1>
          </div>
          <div className="text">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              required
              value={credentials.username}
              placeholder="Enter your Username or Email"
              onChange={ handleChange }
            />
          </div>
          <div className="pass">
            {credentials.password ? (
              <button onClick={() => setPassToggle(!passToggle)}>
                {passToggle ? "HIDE" : "SHOW"}
              </button>
            ) : (
              ""
            )}
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              name="password"
              type={passToggle ? "text" : "password"}
              required
              value={credentials.password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button onClick={ handleSubmit }>Login</button>

          <div className="rec">
            <Link to={"/forgotpassword"}>Forgot Password?</Link>
            <Link to={"/register"}>Creact account!</Link>
          </div>
        </div>
      </div>

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

export default Login;
