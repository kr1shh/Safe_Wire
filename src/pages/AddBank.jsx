import logo from "../assets/logo.png"
import "./addBank.scss"

const AddBank = () => {
  return (
    <>
      <div className="add-container">
        <div className="add-content">
            <div className="add-title">
                <img src={ logo } alt="logo" />
                <h1>Add your bank.</h1>
            </div>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name as per bank"
              required
            />
            <label htmlFor="ac-no">Account No.</label>
            <input type="text" placeholder="Enter Your Account No." required />
            <label htmlFor="ifsc">IFSC Code</label>
            <input type="text" placeholder="Enter your IFSC code" required />
            <div className="add-btn">
                <button type="submit">Add</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default AddBank