import { Link } from "react-router-dom";
import "./summery.scss";
// import { useContext } from "react";
// import UserContext from "../context/userContext"
import { BankCheck } from "./index"
import { userDumData } from "../data/userData";

const Summery = () => {

  // const { user } = useContext(UserContext)
  

  return (
    <main>
      {!userDumData[1].bank ? (
        <BankCheck />
      ) : (
        <div className="summery-container">
          <div className="bank-details">
            <span>{userDumData[1].name}</span>
            <p>
              <span>A/C</span>&nbsp;&nbsp;{userDumData[1].bank.accountNo}
            </p>
            <p>
              <span>IFSC</span>&nbsp;&nbsp;{userDumData[1].bank.ifsc}
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