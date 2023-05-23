import sitelogo from "../assets/images/logo/sitelogo.jpg";
import "../../src/style.scss"


export const Header = () => {
    return(
        <div className="main_header">
            <a href=""><img src={sitelogo} className="mx-auto w-30 h-12 mt-14 pr-10" alt="Site Logo" class="logo"/></a>
        </div>
    )
}