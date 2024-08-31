import "./makeTransfer.scss";
import { Loading } from "../components";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { BankCheck } from "../components";
import documentTitle from "../extras/documentTitle";
import { instance } from "../axios/instance";
import { useUserId } from "../hooks/useUserId";
import toast, { Toaster } from "react-hot-toast";

const MakeTransfer = () => {
  documentTitle("Transfer - SafeWire");
  const [transferData, setTransferData] = useState({
    type: "transfer",
    resName: "",
    resAc: "",
    amount: "",
    ifsc: "",
  });

  const [ loading, setLoading ] = useState(false);


  const { user,setIsFraud } = useContext(UserContext);
  const userId = useUserId();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const transferRes = await instance.post(`transaction/create/${userId}/`, {
        amount: transferData.amount,
        transaction_type: transferData.type,
        ac_number: transferData.resAc,
        ifsc_code: transferData.ifsc,
        nameOrig: transferData.resName,
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        }
      });
      console.log("transfer res : ", transferRes);
      setTransferData({
        type: "transfer",
        resName: "",
        resAc: "",
        amount: "",
        ifsc: "",
      });
      if (transferRes.data.is_fraud) {
        setIsFraud(transferRes.data.is_fraud);
        toast.error("Fraud Detected!!!");
        return;
      } else {
        toast.success(`${transferData.type} successfull`);
      }
    } catch (err) {
      console.log("Transfer Error", err);
      toast.error(err.response.data.message);
      setIsFraud(true)
    }finally{
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransferData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Toaster />
      <div className="transfer-container">
        {user.bank.accountNo === "" ? (
          <BankCheck />
        ) : !loading ? (
          <div className="transfer-form">
            <h1>Transfer Money</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="type">Payment Type</label>
              <select
                name="type"
                id="type"
                value={transferData.type}
                onChange={handleChange}
              >
                <option value="payment">Payment</option>
                <option value="transfer">Transfer</option>
              </select>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter recipient name"
                required
                name="resName"
                value={transferData.resName}
                onChange={handleChange}
              />
              <label htmlFor="account">Account No.</label>
              <input
                type="text"
                placeholder="Enter recipient account no. "
                required
                name="resAc"
                value={transferData.resAccountNo}
                onChange={handleChange}
              />
              <label htmlFor="account">IFSC Code</label>
              <input
                type="text"
                placeholder="Enter IFSC Code "
                required
                name="ifsc"
                value={transferData.ifsc}
                onChange={handleChange}
              />
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                placeholder="Enter the Amount"
                required
                name="amount"
                value={transferData.amount}
                onChange={handleChange}
              />

              <button type="submit">Transfer</button>
            </form>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default MakeTransfer;
