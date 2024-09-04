import { useNavigate } from "react-router-dom"
import "./home.scss"
import heroBg from "../assets/ContourLine.svg"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <main>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Safe Wire</h1>
            <p>
            Every transaction matters secure them with our advanced fraud detection. Prevent threats before they strike, keeping your finances safe and your business thriving. Trust us to protect what’s important. 
            </p>
            <div className="hero-btns">
              <button onClick={ ()=>navigate("/login") }>Login</button>
              <button onClick={ ()=>navigate("/register") }>Sign Up</button>
            </div>
          <img src={ heroBg } alt="hero background" />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home