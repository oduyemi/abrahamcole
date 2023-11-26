import React, { useEffect } from "react";
import Typed from "typed.js";
import { CloudinaryContext, Video } from "cloudinary-react";
// import 



export const AboutContent = () => {
  useEffect(() => {
    // Options for the Typed.js instance
    const options = {
      strings: [
        `Abraham Cole Studio, is a artist studio based in Birmingham, United Kingdom, is 
        currently achieving and documenting its painting and art project on accessible online
        platforms as a digital portfolio. The main aim of this project is to design,
        develop an appealing showroom tailored to attract world-class art collectors and
        primarily get a gallery representations and shows by contemporary art spaces.<br/><br/>
        Abraham Babájídé Cole is a UK based Nigerian artist working across painting,
        drawings, illustration, and digital design. He draws inspiration from nature,
        antiques, and the magic of blending multiple visual forms in engaging with
        conversations around migration, the human condition and politics.<br /><br />
        Abraham is a graduate of the Yaba College of Technology School of Art,
        and he has worked as an art director for advertising and communication
        agencies, and in cultural spaces across Nigeria.`,
      ],
      typeSpeed: 50,
      backSpeed: 30, 
      backDelay: 2000, 
      startDelay: 1000, 
      loop: true, 
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="abt_header mb-4 mt-14">
        <h1 className="text-center">About</h1>
      </div>
      <div className="flex justify-center items-center flex-wrap mx-auto" id="abt_content">
        <div className="md:w-1/2">
            <div id="artistdp">
                <video controls width="700" height="500" loop autoPlay>
                    <source
                        src={`https://res.cloudinary.com/dymd1jkbl/video/upload/v1700992367/abecole/about/about_bsdxew.mp4`}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div className="md:w-1/3 sm:w-full  abt_header">
          <div>
            <p className="mt-6 mx-auto text-l mb-10 typed-text"></p>
          </div>
        </div>
      </div>
    </>
  );
};
