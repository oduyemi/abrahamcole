import React, { useEffect } from 'react';
// import { AboutContent } from '../../components/AboutContent';

const Contact = () => {
    useEffect(() => {
        document.body.classList.add('contact');
        return () => {
          document.body.classList.remove('contact');
        };
      }, []);
    return(
       <></>
    )
}


export default Contact