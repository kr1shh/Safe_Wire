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
                <button onClick={ props.activeToggle }><IoClose/></button>
                <h1 style={{color:props.color}}>{props.title}</h1>
                {/* <div className="modal-div"></div> */}
                <p>{props.description}</p>
            </div>
        </div>
    </>
  )
}

export default Modal