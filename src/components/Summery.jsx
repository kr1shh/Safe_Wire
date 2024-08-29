import { Link } from "react-router-dom";
import "./summery.scss";
import { useContext, useState, useEffect } from "react";
import UserContext from "../context/userContext"
import { BankCheck } from "./index"
import documentTitle from "../extras/documentTitle";
import { instance } from "../axios/instance";
import { useUserId } from "../hooks/useUserId";

const Summery = () => {
  documentTitle("Summary - SafeWire")
  const { user } = useContext(UserContext)
  let userId = useUserId()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`transaction/list/${userId}/`);
        console.log("transaction res : ", response.data.data);
        if (Array.isArray(response.data.data)) {
          const formattedTransactions = response.data.data.map(transaction => ({
            resName: transaction.nameOrig || "",
            amount: transaction.amount || "",
            date: transaction.date || "",
            accountNo: transaction.ac_number || "",
            type: transaction.transaction_type || ""
          }));
          setTransactions(formattedTransactions);
        } else {
          console.error("Expected an array of transactions, but got:", response.data);
        }
      } catch (err) {
        console.log("Transaction err : ", err)
      }
    }
    fetchData()
  }, [userId])

  const recentTransactions = transactions.slice(-4).reverse(); // Get last 5 transactions and reverse the order

  return (
    <main>
      {user.bank.accountNo === "" ? (
        <BankCheck />
      ) : (
        <div className="summery-container">
          <div className="bank-details">
            <span>{user.name}</span>
            <p>
              <span>A/C</span>&nbsp;&nbsp;{user.bank.accountNo}
            </p>
            <p>
              <span>IFSC</span>&nbsp;&nbsp;{user.bank.ifsc}
            </p>
          </div>
          <Link to={"/dashboard/transfer"}>
            <button>Make Transfer</button>
          </Link>
          <div className="transaction-container">
            <h2>Recent Transactions</h2>
            {recentTransactions.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Recipient</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Account</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.resName}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.accountNo}</td>
                      <td>{transaction.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-data">No transaction data available</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default Summery