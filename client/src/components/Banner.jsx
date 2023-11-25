import "animate.css";
import Button from "./elements/Button";
import BouncingText from "./BouncingText";
import { Typewriter } from "./TypeWriter";


export const Banner = () => {
    return(
        <>
            <div className="banner w-full md-1/3 px-7 mx-auto">
                <div className="banner-description w-full md-1/3 p-3 mt-10 pr-10 mb-10 md-1/3 p-3">
                    <div className="typewriter-container flex justify-center items-center mt-6">
                        <Typewriter />
                    </div>
                </div> 
                <BouncingText />
            </div>
            <div className="continue w-full text-center relative mx-auto">
                <Button className="bg-colour"><a href="/selected-projects"> &emsp; Continue &emsp;</a></Button>
            </div>
        </>
    )
}