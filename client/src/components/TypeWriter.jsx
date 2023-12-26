import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import "../typewriter.scss";

export const Typewriter = () => {
  const [showText, setShowText] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Art is a Language";

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const animateText = () => {
      setText(fullText.substring(0, currentIndex));

      if (currentIndex < fullText.length) {
        timeout = setTimeout(animateText, 100);
        currentIndex++;
      } else {
        setShowText(true);
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-1/2 h-24 bg-white text-blaq">
      <Transition
        show={showText}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="text-4xl font-light"
      >
        {text}
      </Transition>
    </div>
  );
};
