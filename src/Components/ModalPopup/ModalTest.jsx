import { useState } from "react"
import ModalComponent from ".";
import "../ModalPopup/style.css";

export default function ModalTest(){
    const[showModalPopup, setShowModalPopup] = useState(false);
    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }
    function oNClose(){
        setShowModalPopup(false);
    }
    return(
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal</button>
            {
                showModalPopup && <ModalComponent onclose={oNClose} body={<div> Customize body</div>}/>
            }
        </div>
    );
}