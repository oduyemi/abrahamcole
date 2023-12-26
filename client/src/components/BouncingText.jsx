import React, { useEffect, useRef } from "react";
import "../bounce.scss";

const BouncingText = () => {
  const text = "ARTWORKS AND DESIGN";
  const lettersRef = useRef([]);

  useEffect(() => {
    const letters = lettersRef.current;

    letters.forEach((letter, index) => {
      const delay = index * 100; 
      const delayString = `${delay}ms`;

      letter.style.setProperty("--letter-offset", `${index * 100}px`);
      letter.style.setProperty("--animation-delay", delayString);
      letter.classList.add("bouncing-letter");
    });
  }, []);

  return (
    <div className="bouncing-text-container">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          ref={el => (lettersRef.current[index] = el)}
          className="bouncing-letter"
          style={{
            "--letter-offset": `${index * 100}px` 
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default BouncingText;
