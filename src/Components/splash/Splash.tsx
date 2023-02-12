import Header from "../header/Header";
import "./Splash.css";
import image from "./../../logo.png";

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
                <button className="getStarted">Get Started</button>
            </div>
            {/* button at bottom: get started */}
        </div>
    )
}

export default Splash;