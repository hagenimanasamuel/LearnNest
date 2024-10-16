import React, { useEffect, useState } from "react";

const Home = () => {
  const [color, setColor] = useState(getRandomColor());
  const [showCharacter, setShowCharacter] = useState(false); // State to control character visibility
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Change the color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 2000); // Change color every 2 seconds

    // Show character after 5 seconds
    const characterTimer = setTimeout(() => {
      setShowCharacter(true);
    }, 5000); // 5 seconds

    // Show message and slide it out in a loop
    const messageTimer = setInterval(() => {
      if (showCharacter) {
        setShowMessage(true); // Show message
        // Hide message after 10 seconds and then slide out character after 5 seconds
        const hideMessageTimer = setTimeout(() => {
          setShowMessage(false); // Hide message
          // Slide out character after the message hides
          const slideOutTimer = setTimeout(() => {
            setShowCharacter(false); // Slide out character after 5 seconds
          }, 5000); // 5 seconds

          return () => clearTimeout(slideOutTimer); // Cleanup
        }, 10000); // 10 seconds

        return () => clearTimeout(hideMessageTimer); // Cleanup
      }
    }, 15000); // Every 15 seconds after character appears

    return () => {
      clearInterval(interval); // Cleanup on component unmount
      clearTimeout(characterTimer); // Cleanup character timer
      clearInterval(messageTimer); // Cleanup message timer
    };
  }, [showCharacter]);

  return (
    <>
      <div
        className="relative flex-grow flex flex-col items-center justify-center text-center bg-[#e8f7ff] overflow-hidden"
        style={{ height: "calc(100vh - 92.5px)" }} // Adjust height based on navbar height
      >
        <h1 className="text-4xl font-bold text-indigo-600">Hello World</h1>

        {/* Dotted Rectangle at bottom-left */}
        <div
          className="absolute bottom-0 left-0 my-0 mx-0"
          style={{
            height: "150px",
            width: "150px",
            backgroundImage: `radial-gradient(${color} 15%, transparent 16%)`, // Dot size
            backgroundSize: "33px 33px", // Adjusted for a 3px gap
            animation: "fade 2s infinite",
          }}
        />

        {/* Cartoon Character with slide-in animation */}
        {showCharacter && (
          <div
            className={`absolute bottom-10 left-10 ${showMessage ? 'animate-slide-out' : 'animate-slide-in'}`} // Position and animation
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
              <path d="M35 60 Q50 80 65 60" stroke="black" strokeWidth="5" fill="none" />
            </svg>

            {/* Message above the character's head */}
            {showMessage && (
              <div
                className="absolute top-0 right-0 transform translate-x-2 -translate-y-8 bg-blue-500 text-white px-2 py-1 rounded"
                style={{ zIndex: 1 }} // Ensure message is above other elements
              >
                Hello, I'm happy to have you here!
              </div>
            )}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fade {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slide-in {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slide-out {
            0% {
              transform: translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-100%);
              opacity: 0;
            }
          }
          .animate-slide-in {
            animation: slide-in 1s forwards; // Slide in animation
          }
          .animate-slide-out {
            animation: slide-out 1s forwards; // Slide out animation
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-15px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
