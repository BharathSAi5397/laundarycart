import react from "react";
import "./orderHeader.css"
import Profilepic from "../images/profilepic.png"

const OrderHeader =()=>{
    return(
        <div className="navbar">
            <div className="navleft">
                Laundary
            </div>
            <div className="navright">
                <div>
                    Price
                </div>
                <div>
                    career
                </div>
                <div>
                    <span>
                    <img className="profileimage" src={Profilepic} alt="profilepic" />
                    </span>
                    <span>
                    <h3>User name</h3>
                    </span>
                </div>

            </div>
           
        </div>
    )
}
export default OrderHeader;