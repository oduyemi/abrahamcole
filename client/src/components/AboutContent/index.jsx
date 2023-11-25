import React from "react";

export const AboutContent = () =>{
    return(
        <div className="flex justify-center items-center mt-14 mx-auto w-2/3" id="abt_content">
            <div className="md:w-1/2">
                <div id="artistdp">
                    <img src={require("../../assets/images/artist.jpg")} alt="Artist" width="87%" />
                </div>
            </div>
            <div className="w-1/3 abt_header">
                <h1 className="mb-4 mt-14">MEET THE ARTIST</h1>
                <div>
                    <p className="mt-8 text-l mb-10">
                        Abraham Babájídé Cole is a UK based Nigerian artist working across painting,
                        drawings, illustration, and digital design. He draws inspiration from nature,
                        antiques, and the magic of blending multiple visual forms in engaging with
                        conversations around migration, the human condition and politics.<br /><br />
                        Abraham is a graduate of the Yaba College of Technology School of Art,
                        and he has worked as an art director for advertising and communication
                        agencies, and in cultural spaces across Nigeria.<br /><br />
                        In October 2022, Cole will be presenting his first solo exhibition,
                        titled “Deep Introspection,” at ArtRooms Gallery, Kings Heat,
                        Birmingham, United Kingdom.
                    </p>
                    {/* npm */}
                </div>
            </div>
           
        </div>
    )
}



      