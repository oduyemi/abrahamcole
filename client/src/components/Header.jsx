import sitelogo from "../assets/images/logo/sitelogo.jpg";
import "../../src/style.scss"
import { Link } from "react-router-dom";


export const Header = () => {
    return(
        <div className="main_header">
            <Link path="/"><a href="">
                <img src={sitelogo} className="mx-auto w-30 h-12 mt-14 pr-10" alt="Site Logo" class="logo"/></a>
            </Link>
            {/* <div>
            <Link path="/about">
                <h2>About</h2>
            </Link>
            </div> */}
        </div>
    )
}