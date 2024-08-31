import "./transactions.scss";
import { BankCheck } from "./index"
import UserContext from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import documentTitle from "../extras/documentTitle";
import { useUserId } from "../hooks/useUserId";
import { instance } from "../axios/instance";

const Transactions = () => {
  documentTitle("Transactions - SafeWire")
  const [transactions, setTransactions] = useState([])
  const { user } = useContext(UserContext)
  const userId = useUserId()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`transaction/list/${userId}/`,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        });
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

  useEffect(() => {
    console.log("Updated transactions state:", transactions);
  }, [transactions]);

  return (
    <>
      {user.bank.accountNo === "" ? (
        <BankCheck />
      ) : (
        <div className="transactions-container">
          <h1>Transactions</h1>
          {transactions.length > 0 ? (
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
                  {transactions.map((transaction, index) => (
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
      )}
    </>
  );
}

export default Transactions