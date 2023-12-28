import React, { useState } from "react";
import Button from "../elements/Button";
import "../../style.scss";

export const SelectionCard = () => {
  const [activeList, setActiveList] = useState(1);

  const handleNextClick = () => {
    if (activeList < 5) {
      setActiveList((prevActive) => prevActive + 1);
    } else {
      setActiveList(1);
    }
  };

  const handleBackClick = () => {
    if (activeList > 1) {
      setActiveList((prevActive) => prevActive - 1);
    } else {
      setActiveList(5);
    }
  };

  const lists = {
    1: [
      {
        imageUrl: require("../../assets/images/projects/7.jpg"),
        title: "MY BASQUAT. 2023",
      },
      {
        imageUrl: require("../../assets/images/projects/18.jpg"),
        title: "MR. SPEAKER. 2023",
      },
      {
        imageUrl: require("../../assets/images/projects/0.jpg"),
        title: "EYE OPENER. 2023",
      },
    ],

    2: [
      {
        imageUrl: require("../../assets/images/projects/1.png"),
        title: "MR. MONEY. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/2.png"),
        title: "FAMILY MAN. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/3.png"),
        title: "FAMILY MAN. 2021",
      },
    ],

    3: [
      {
        imageUrl: require("../../assets/images/projects/5.jpg"),
        title: "CELESTIAL SIBLINGS. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/6.jpg"),
        title: "THE CHOSEN ONE. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/8.jpg"),
        title: "FLY BOI. 2021",
      },
    ],

    4: [
      {
        imageUrl: require("../../assets/images/projects/9.jpg"),
        title: "QUEEN MOTHER. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/10.jpg"),
        title: "HIGHLY SPIRITUAL. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/11.jpg"),
        title: "SMALLIE. 2021",
      },
    ],

    5: [
      {
        imageUrl: require("../../assets/images/projects/12.jpg"),
        title: "COCONUT HEAD. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/13.jpg"),
        title: "DREAMER. 2021",
      },
      {
        imageUrl: require("../../assets/images/projects/14.jpg"),
        title: "KINGS QUEEN. 2021",
      },
],
  };

  const showNextButton = activeList < 5;
  const showBackButton = activeList > 1;

  return (
    <div className="container">
      <div className="h-full text-center">
        <h2 className="font-semibold text-3xl my-10">Selected Projects</h2>
        <div className={`list${activeList} container project_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6`}>
          {lists[activeList].map((image, index) => (
            <div key={index}>
              <img
                src={image.imageUrl}
                className="w-full h-4/5 rounded shadow-sm my-6"
                alt={`Image ${index + 1}`}
              />
              <p className="text-center text-black">{image.title}</p>
            </div>
          ))}
        </div>
    
        {/* Navigation buttons */}
        <div className="navigation_buttons w-full text-center relative mt-[-3.4%]">
          {showBackButton && (
            <Button className="" onClick={handleBackClick}>
              &emsp; Back &emsp;
            </Button>
          )}
          {showNextButton && (
            <Button className="" onClick={handleNextClick}>
              &emsp; Next &emsp;
            </Button>
          )}
        </div>
      </div>
    </div>  
  );  
};