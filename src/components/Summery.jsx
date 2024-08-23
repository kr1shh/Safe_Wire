import { Link } from "react-router-dom";
import "./summery.scss";
import { useContext } from "react";
import UserContext from "../context/userContext"
import { BankCheck } from "./index"

const Summery = () => {

  const { user } = useContext(UserContext)

  return (
    <main>
      {user ? (
        <BankCheck />
      ) : (
        <div className="summery-container">
          <div className="bank-details">
            <span>User Full Name</span>
            <p>
              <span>A/C</span>&nbsp;&nbsp;0000000000000
            </p>
            <p>
              <span>IFSC</span>&nbsp;&nbsp;ABCD0001234
            </p>
          </div>
          <Link to={"/dashboard/transfer"}>
            <button>Make Transfer</button>
          </Link>
          <div className="transaction-container">
            <h2>Recent Transactions</h2>

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
        </div>
      )}
    </main>
  );
}

export default Summery