import "./bankCheck.scss";

import { useNavigate } from "react-router-dom";


const BankCheck = () => {

  const navigate = useNavigate() 

  return (
    <div className="bank-check">
      <h1>Please add your bank account!</h1>
      <button onClick={ ()=>{navigate("/addbank")} }>Add</button>
    </div>
  )
}

export default BankCheck