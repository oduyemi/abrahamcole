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
        imageUrl: require("../../assets/images/projects/a.jpg"),
        title: "Title 1",
      },
      {
        imageUrl: require("../../assets/images/projects/b.jpg"),
        title: "Title 2",
      },
      {
        imageUrl: require("../../assets/images/projects/c.jpg"),
        title: "Title 3",
      },
      {
        imageUrl: require("../../assets/images/projects/d.jpg"),
        title: "Title 4",
      },

    ],
    2: [
      {
        imageUrl: require("../../assets/images/projects/b.jpg"),
        title: "Title 1",
      },
      {
        imageUrl: require("../../assets/images/projects/c.jpg"),
        title: "Title 2",
      },
      {
        imageUrl: require("../../assets/images/projects/a.jpg"),
        title: "Title 3",
      },
      {
        imageUrl: require("../../assets/images/projects/d.jpg"),
        title: "Title 4",
      }
    ],
    3: [
      {
        imageUrl: require("../../assets/images/projects/d.jpg"),
        title: "Title 1",
      },
      {
        imageUrl: require("../../assets/images/projects/b.jpg"),
        title: "Title 2",
      },
      {
        imageUrl: require("../../assets/images/projects/a.jpg"),
        title: "Title 3",
      },
      {
        imageUrl: require("../../assets/images/projects/c.jpg"),
        title: "Title 4",
      }
    ],
    4: [
      {
        imageUrl: require("../../assets/images/projects/a.jpg"),
        title: "Title 1",
      },
      {
        imageUrl: require("../../assets/images/projects/b.jpg"),
        title: "Title 2",
      },
      {
        imageUrl: require("../../assets/images/projects/c.jpg"),
        title: "Title 3",
      },
      {
        imageUrl: require("../../assets/images/projects/d.jpg"),
        title: "Title 4",
      }
    ],
    5: [
      {
        imageUrl: require("../../assets/images/projects/c.jpg"),
        title: "Title 1",
      },
      {
        imageUrl: require("../../assets/images/projects/a.jpg"),
        title: "Title 2",
      },
      {
        imageUrl: require("../../assets/images/projects/b.jpg"),
        title: "Title 3",
      },
      {
        imageUrl: require("../../assets/images/projects/d.jpg"),
        title: "Title 4",
      }
],
  };

  const showNextButton = activeList < 5;
  const showBackButton = activeList > 1;

    return (
      <div className="h-full">
      <div className="mx-auto">
        <h2 className="text-center font-semibold text-3xl my-8">Selected Projects</h2>
      </div>
      <div className={`list${activeList} container grid grid-cols-2 gap-6 lg:grid-cols-4`}>
        {lists[activeList].map((image, index) => (
          <div key={index}>
            <img
              src={image.imageUrl}
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
              alt={`Image ${index + 1}`}
            />
            <p className="text-center">{image.title}</p>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons w-full text-center relative mx-auto">
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
  );
};