import React, { useEffect } from "react";
import { ContactUs } from "../../components/ContactUs";

const Contact = () => {
    useEffect(() => {
        document.body.classList.add("contact");
        return () => {
          document.body.classList.remove("contact");
        };
      }, []);
    return(
       <ContactUs />
    )
}


export default Contact