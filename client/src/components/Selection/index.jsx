import { title } from 'process';
import React, { useState } from 'react';
import Modal from 'react-modal';
import "../../style.scss";



const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.99)',
        },
        content: {
          background: 'none',
          border: 'none',
          color: '#fff',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      {children}
      <button
        onClick={onRequestClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: '#fff',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </Modal>
  );
};

const collection1Images = [
  {src: require("../../assets/images/projects/7.jpg"), title: "MY BASQUAT. 2023"},
  {src: require("../../assets/images/projects/18.jpg"), title:"MR. SPEAKER. 2023"},
  {src: require("../../assets/images/projects/0.jpg"), title:"EYE OPENER. 2023"},
];

const collection2Images = [
  {src: require("../../assets/images/projects/1.png"), title: "MR. MONEY. 2021"},
  {src: require("../../assets/images/projects/2.png"), title:"FAMILY MAN. 2021"},
  {src: require("../../assets/images/projects/3.png"), title:"FAMILY MAN. 2021"},
  {src: require("../../assets/images/projects/4.png"), title: "ELDER. 2021"},
];

const collection3Images = [
  {src: require("../../assets/images/projects/5.jpg"), title: "CELESTIAL SIBLINGS. 2021"},
  {src: require("../../assets/images/projects/6.jpg"), title:"THE CHOSEN ONE. 2021"},
  {src: require("../../assets/images/projects/8.jpg"), title:"FLY BOI. 2021"},
  {src: require("../../assets/images/projects/9.jpg"), title: "QUEEN MOTHER. 2021"},
  {src: require("../../assets/images/projects/10.jpg"), title: "HIGHLY SPIRITUAL. 2021"},
  {src: require("../../assets/images/projects/11.jpg"), title: "SMALLIE. 2021"},
  {src: require("../../assets/images/projects/12.jpg"), title: "COCONUT HEAD. 2021"},
  {src: require("../../assets/images/projects/13.jpg"), title: "DREAMER. 2021"},
  {src: require("../../assets/images/projects/14.jpg"), title: "KINGS QUEEN. 2021"},
  {src: require("../../assets/images/projects/15.jpg"), title: "GOOD MORNING MY NEIGHBOURS. 2021"},
  {src: require("../../assets/images/projects/16.jpg"), title: "MADAME, THE MADAME. 2021"},
  {src: require("../../assets/images/projects/17.jpg"), title: "MISS INDEPENDENT. 2021"},
  {src: require("../../assets/images/projects/19.jpg"), title: "MR AND MRS. 2021"},
];




export const SelectionCard = () => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [currentImage1Index, setCurrentImage1Index] = useState(0);
  const [currentImage2Index, setCurrentImage2Index] = useState(0);
  const [currentImage3Index, setCurrentImage3Index] = useState(0);

  const openModal1 = () => {
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
    setCurrentImage1Index(0);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
    setCurrentImage2Index(0);
  };

  const openModal3 = () => {
    setModal3IsOpen(true);
  };

  const closeModal3 = () => {
    setModal3IsOpen(false);
    setCurrentImage3Index(0);
  };

  const nextImage = (collectionIndex) => {
    switch (collectionIndex) {
      case 1:
        setCurrentImage1Index((prevIndex) => (prevIndex + 1) % collection1Images.length);
        break;
      case 2:
        setCurrentImage2Index((prevIndex) => (prevIndex + 1) % collection2Images.length);
        break;
      case 3:
        setCurrentImage3Index((prevIndex) => (prevIndex + 1) % collection3Images.length);
        break;
      default:
        break;
    }
  };

  const currentCollection1Images = collection1Images;
  const currentCollection2Images = collection2Images;
  const currentCollection3Images = collection3Images;
  return (
    <div className="container">
      <div className="h-full text-center">
        <h2 className="font-semibold text-3xl my-10">Selected Projects</h2>
        <div className="flex items-center justify-center gap-6 container project_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={currentCollection1Images[currentImage1Index].src}
              className="w-full h-4/5 rounded my-6"
              alt={`Collection Image ${currentImage1Index + 1}`}
              onClick={openModal1}
            />
            <p className="text-center text-black image-title">
              {currentCollection1Images[currentImage1Index].title}
            </p>
            <CustomModal
              isOpen={modal1IsOpen}
              onRequestClose={closeModal1}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.99)',
                },
                content: {
                  background: 'none',
                  border: 'none',
                  color: "#fff",
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
              }}
            >
              <img
                src={currentCollection1Images[currentImage1Index].src}
                className="w-1/3 h-4/5 mx-auto max-h-screen rounded my-6"
                alt={`Collection Image ${currentImage1Index + 1}`}
              />
              <p
                className="text-center bg-[#C32F27] text-white image-title w-1/2 mx-auto">
                  {currentCollection1Images[currentImage1Index].title}
                <span>
                  <p className='inline'>&emsp; 83CMX60CM. &emsp; MIX MEDIA ON PAPER</p>
                </span>
              </p>
              <button onClick={() => nextImage(1)}>Next</button>
            </CustomModal>
          </div>
          <div className="flex flex-col items-center image-container">
            <img
              src={currentCollection2Images[currentImage2Index].src}
              className="w-full h-4/5 rounded my-6"
              alt={`Collection Image ${currentImage2Index + 1}`}
              onClick={openModal2}
            />
            <p className="text-center text-black image-title">{currentCollection2Images[currentImage2Index].title}</p>
            <CustomModal
              isOpen={modal2IsOpen}
              onRequestClose={closeModal2}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.99)',
                },
                content: {
                  background: 'none',
                  border: 'none',
                  color: "#fff",
                },
              }}
            >
              <img
                src={currentCollection2Images[currentImage2Index].src}
                className="w-1/3 h-4/5 mx-auto max-h-screen rounded my-6"
                alt={`Collection Image ${currentImage2Index + 1}`}
              />
              <p
                className="text-center bg-[#C32F27] text-white image-title w-1/2 mx-auto">
                  {currentCollection2Images[currentImage2Index].title}
                <span>
                  <p className='inline'>&emsp; 83CMX60CM. &emsp; MIX MEDIA ON PAPER</p>
                </span>
              </p>
              <button onClick={() => nextImage(2)}>Next</button>
            </CustomModal>
          </div>
          <div className="flex flex-col items-center image-container">
            <img
              src={currentCollection3Images[currentImage3Index].src}
              className="w-full h-4/5 rounded my-6"
              alt={`Collection Image ${currentImage3Index + 1}`}
              onClick={openModal3}
            />
            <p className="text-center text-black image-title">{currentCollection3Images[currentImage3Index].title}</p>
            <CustomModal
              isOpen={modal3IsOpen}
              onRequestClose={closeModal3}
              contentLabel="MR. SPEAKER. 2023"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.99)',
                },
                content: {
                  background: 'none',
                  border: 'none',
                  color: "#fff",
                },
              }}
            >
              <img
                src={currentCollection3Images[currentImage3Index].src}
                className="w-1/3 h-4/5 mx-auto max-h-screen rounded my-6"
                alt={`Collection Image ${currentImage3Index + 1}`}
                onClick={openModal3}
                />
                <p  className="text-center bg-[#C32F27] text-white image-title w-1/2 mx-auto">{currentCollection3Images[currentImage3Index].title}
                <span><p className='inline'> &emsp; 83CMX60CM. &emsp; MIX MEDIA ON PAPER</p></span></p>
                <button onClick={() => nextImage(3)}>Next</button>
              </CustomModal>
            </div>
        </div>
      </div>
    </div>
  );
};