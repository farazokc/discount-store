import Header from "../header/Header";
import "./Splash.css";
import image from "./../../logo.png";
import { Link } from "react-router-dom";

function Splash() {
    return(
        <div className="splash">
            {/* icon */}
            <div className="logo">
                <img src={image} alt="salyani-logo"/>
            </div>
            <div className="header">
                <Header />
            </div>
            <div className="button">
                <Link to="/login">
                    <button className="getStarted">Get Started</button>
                </Link>
            </div>
            {/* button at bottom: get started */}
        </div>
    )
}

export default Splash;