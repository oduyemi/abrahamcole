import React, { useEffect } from "react";
import Typed from "typed.js";



export const AboutContent = () => {
  useEffect(() => {
    const options = {
      strings: [
        `Abraham Babájídé Cole is a UK based Nigerian artist working expresses his creativity through a diverse range of mediums, 
        including painting, drawings, illustration, mix media and digital design.
        Drawing inspiration from nature, antiques, and the amalgamation
        of various visual elements, Cole actively engages in conversations
        surrounding migration, the human condition, and politics.<br><br>
        A graduate of the Yaba College of Technology School of Art,
        Abraham has accumulated extensive experience as an art and
        creative director in the advertising and communication industry.
        His achievements include multiple creative awards, and his
        influence extends into various cultural spaces across Nigeria.<br><br>
        As a visionary artist, his central focus lies in utilizing various forms
        of conceptualization and engaging ideas to effectively communicate
        the nuances of everyday experiences within the world he inhabits.
        Join him on his artistic journey and witness the evolution of his
        creative exploration. <br /><br />
        <img src="../../assets/images/sign.png" alt="signature" width="40%" />`,
      ],
      typeSpeed: 50,
      // backSpeed: 30, 
      // backDelay: 2000, 
      startDelay: 1000, 
      // loop: true, 
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
          <div className="mt-6 mx-auto text-l mb-10 typed-text"></div>
        </div>
      </div>
    </>
  );
};
