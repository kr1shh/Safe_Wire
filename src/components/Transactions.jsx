import "./transactions.scss";
import { BankCheck } from "./index"
import UserContext from "../context/userContext";
import { useContext } from "react";

const Transactions = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      {user ? (
        <BankCheck />
      ) : (
        <div className="transactions-container">
          <h1>Transactions</h1>
          <table>
            <tr>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Account</th>
            </tr>
            <tr>
              <td>User Name</td>
              <td>200</td>
              <td>10-08-24</td>
              <td>1234567890123</td>
            </tr>

            <tr>
              <td>User Name</td>
              <td>200</td>
              <td>10-08-24</td>
              <td>1234567890123</td>
            </tr>
            <tr>
              <td>User Name</td>
              <td>200</td>
              <td>10-08-24</td>
              <td>1234567890123</td>
            </tr>
            <tr>
              <td>User Name</td>
              <td>200</td>
              <td>10-08-24</td>
              <td>1234567890123</td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
}

export default Transactions