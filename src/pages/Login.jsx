import "./login.scss";
import { Background } from "../components";
import { useState } from "react";
import logo from "../assets/logo.png"

const Login = () => {
  const [passToggle, setPassToggle] = useState(false);
  const [credentials, setCredentials] = useState({
    username: null,
    password: null,
  });

  return (
    <>
      <div className="login-container">
        <div className="login-card">
        <div className="title">
            <img src={ logo } alt="Logo" />
            <h1>Login</h1>
        </div>
          <div className="text">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              required
              value={credentials.username}
              placeholder="Enter your Username or Email"
              onChange={(e) => {
                setCredentials({ username: e.target.value });
              }}
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
              type={passToggle ? "text" : "password"}
              required
              value={credentials.password}
              placeholder="Enter your password"
              onChange={(e) => {
                setCredentials({ password: e.target.value });
              }}
            />
          </div>
          <button>Login</button>
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
