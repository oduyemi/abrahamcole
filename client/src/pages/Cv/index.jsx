import React, { useEffect } from "react";
import { Resume } from "../../components/Resume";

const Cv = () => {
    useEffect(() => {
        document.body.classList.add("cv");
        return () => {
          document.body.classList.remove("cv");
        };
      }, []);
    return(
       <Resume />
    )
}


export default Cv