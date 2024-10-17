import React, { useEffect, useState } from "react";
import LearningKid from "/videos/video1.mp4";

const Home = () => {
  const [color, setColor] = useState(getRandomColor());
  const [showCharacter, setShowCharacter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 2000);

    const characterTimer = setTimeout(() => {
      setShowCharacter(true);
    }, 5000);

    const messageTimer = setInterval(() => {
      if (showCharacter) {
        setShowMessage(true);
        const hideMessageTimer = setTimeout(() => {
          setShowMessage(false);
          const slideOutTimer = setTimeout(() => {
            setShowCharacter(false);
          }, 5000);

          return () => clearTimeout(slideOutTimer);
        }, 10000);

        return () => clearTimeout(hideMessageTimer);
      }
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(characterTimer);
      clearInterval(messageTimer);
    };
  }, [showCharacter]);

  return (
    <>
      <div
        className="app-container relative flex-grow flex flex-col items-center justify-center text-center bg-[#e8f7ff] overflow-hidden"
        style={{
          height: "calc(100vh - 92.5px)",
          backgroundImage: "url('/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Video on left side */}
        <video
          src={LearningKid}
          autoPlay
          muted
          loop
          className="absolute"
          style={{
            left: "50px",
            bottom: "0",
            height: "700px",
            width: "200px",
            transform: "rotate(-15deg)"
          }}
        />
        <div
          className="absolute bottom-0 left-0 my-0 mx-0"
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: `radial-gradient(${color} 15%, transparent 16%)`,
            backgroundSize: "20px 20px",
            animation: "fade 2s infinite",
          }}
        />
        <div
          className="absolute top-0 right-0 my-0 mx-0"
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: `radial-gradient(${color} 15%, transparent 16%)`,
            backgroundSize: "20px 20px",
            animation: "fade 2s infinite",
          }}
        />

        {showCharacter && (
          <div
            className={`absolute bottom-10 left-10 ${
              showMessage ? "animate-slide-out" : "animate-slide-in"
            }`}
            style={{ width: "100px", height: "100px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full"
            >
              <circle cx="50" cy="50" r="40" fill="limegreen" />
              <circle cx="35" cy="40" r="5" fill="black" />
              <circle cx="65" cy="40" r="5" fill="black" />
              <path
                d="M35 60 Q50 80 65 60"
                stroke="black"
                strokeWidth="5"
                fill="none"
              />
            </svg>

            {showMessage && (
              <div
                className="absolute top-0 right-0 transform translate-x-2 -translate-y-8 bg-blue-500 text-white px-2 py-1 rounded"
                style={{ zIndex: 1 }}
              >
                Hello, I'm happy to have you here!
              </div>
            )}
          </div>
        )}

        {/* Centered Welcome Message with Glassmorphism */}
        <div
          className="relative z-10 p-8 rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-blur-lg"
          style={{
            width: "45rem",
            height: "20rem",
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
            border: "2px solid transparent",
            animation: "borderAnimation 7s linear infinite, scaleUp 0.5s ease-in-out infinite alternate",
          }}
        >
          <h1 className="text-4xl text-blue-800 font-bold mb-4 animate-fade-in pb-5">Welcome to LearnNest</h1>
          <p className="mb-2 animate-fade-in text-2xl text-gray-800">We are the best in online teaching!</p>
          <p className="mb-2 animate-fade-in text-gray-800">Our courses are designed to meet your needs.</p>
          <p className="animate-fade-in text-gray-800">Join us today and start learning!</p>

          {/* Moving border effect */}
          <div className="moving-border" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
        </div>

        {/* Animation for top left side */}
        <div className="loader absolute top-14">
          <div className="box box-1">
            <div className="side-left"></div>
            <div className="side-right"></div>
            <div className="side-top"></div>
          </div>
          <div className="box box-2">
            <div className="side-left"></div>
            <div className="side-right"></div>
            <div className="side-top"></div>
          </div>
          <div className="box box-3">
            <div className="side-left"></div>
            <div className="side-right"></div>
            <div className="side-top"></div>
          </div>
          <div className="box box-4">
            <div className="side-left"></div>
            <div className="side-right"></div>
            <div className="side-top"></div>
          </div>
        </div>

        <div className="container absolute" style={{ bottom: "10px" }}>
          <div className="phone"></div>
          <div className="phone"></div>
          <div className="phone"></div>
        </div>
      </div>

      {/* Animation for the top right */}
<div class="main relative -top-[7rem] ml-[45rem] flex justify-center items-center">
  <div class="up">
    <div class="loaders">
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
      <div class="loaderr"></div>
    </div>
    <div class="loadersBB">
      <div class="loaderAA">
        <div class="ball0"></div>
      </div>
      <div class="loaderAA">
        <div class="ball1"></div>
      </div>
      <div class="loaderAA">
        <div class="ball2"></div>
      </div>
      <div class="loaderAA">
        <div class="ball3"></div>
      </div>
      <div class="loaderAA">
        <div class="ball4"></div>
      </div>
      <div class="loaderAA">
        <div class="ball5"></div>
      </div>
      <div class="loaderAA">
        <div class="ball6"></div>
      </div>
      <div class="loaderAA">
        <div class="ball7"></div>
      </div>
      <div class="loaderAA">
        <div class="ball8"></div>
      </div>
    </div>
  </div>
</div>


      {/* CSS Animations */}
      <style>
        {`
          @keyframes borderAnimation {
            0% {
              border-color: rgba(255, 0, 0, 1);
            }
            25% {
              border-color: rgba(0, 255, 0, 1);
            }
            50% {
              border-color: rgba(0, 0, 255, 1);
            }
            75% {
              border-color: rgba(255, 255, 0, 1);
            }
            100% {
              border-color: rgba(255, 0, 0, 1);
            }
          }

          @keyframes scaleUp {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.01);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .moving-border {
            border: none;
            border-radius: 10px;
            animation: borderAnimation 10s linear infinite;
          }

          .animate-fade-in {
            animation: fadeIn 10s forwards;
            opacity: 0;
            animation-delay: 0.5s; /* Optional: delay for staggered effect */
          }
        `}
      </style>
    </>
  );
};

export default Home;
