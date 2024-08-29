import { useContext } from "react";
import "./modal.scss";
import { IoClose } from "react-icons/io5";
import UserContext from "../context/userContext";


const Modal = (props) => {
    const { isFraud,setIsFraud } = useContext(UserContext);
  return (
    <>
        <div className="modal-container">
            <div className="modal">
                <button onClick={ ()=>setIsFraud( !isFraud ) }><IoClose/></button>
                <h1>{props.title}</h1>
                {/* <div className="modal-div"></div> */}
                <p>{props.description}</p>
            </div>
        </div>
    </>
  )
}

export default Modal