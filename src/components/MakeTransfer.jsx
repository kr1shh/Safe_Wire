import "./makeTransfer.scss";
import { Loading } from "../components"
import { useContext } from "react";
import UserContext from "../context/userContext";
import {BankCheck} from "../components";


const MakeTransfer = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="transfer-container">
        {user ? (
          <BankCheck />
        ) : (
          <div className="transfer-form">
            <h1>Transfer Money</h1>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter recipient name" required />
              <label htmlFor="account">Account No.</label>
              <input
                type="text"
                placeholder="Enter recipient account no. "
                required
              />
              <label htmlFor="amount">Amount</label>
              <input type="text" placeholder="Enter the Amount" required />

              <button type="submit">Transfer</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default MakeTransfer