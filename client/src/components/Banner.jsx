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

                <div className="banner_nav flex items-center justify-between">
                    <div className="banner_left w-full relative mx-auto">
                        <p className="font-light text-2xl text-center animate__animated animate__fadeIn animate__delay-1s">Abraham Cole Designs &emsp;
                        <span><Button className="bg-colour"> Enter </Button></span></p>
                    </div>

                    <div className="banner_right mx-auto relative w-full">
                        <p className="font-light text-2xl text-center animate__animated animate__fadeIn animate__delay-1s">Abraham Cole Studios &emsp;
                        <span> <Button className="bg-colour">Enter </Button></span></p>
                    </div>
                </div>
                <BouncingText />
            </div>
        </>
    )
}