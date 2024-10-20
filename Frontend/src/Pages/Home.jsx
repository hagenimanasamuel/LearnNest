import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import LearningKid from "/videos/video1.mp4";

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

    }, []);

  return (
    <div className="container-fluid p-0" style={{ height: "calc(100vh - 106.25px)", overflow: "hidden" }}>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center h-100"
        style={{
          backgroundImage: "url('/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Video on the left side */}
        {/* <video
          src={LearningKid}
          autoPlay
          muted
          loop
          className="position-absolute"
          style={{
            left: "50px",
            bottom: "0",
            height: "500px",
            width: "150px",
            transform: "rotate(-15deg)",
          }}
        /> */}

        {/* Bottom-left Color changing dot */}
        <div
          className="position-absolute"
          style={{
            bottom: "0",
            left: "0",
            height: "200px",
            width: "200px",
            backgroundImage: `radial-gradient(${color} 15%, transparent 16%)`,
            backgroundSize: "20px 20px",
            animation: "fade 2s infinite",
          }}
        />
        {/* Top-right Color changing dot */}
        <div
          className="position-absolute"
          style={{
            top: "0",
            right: "0",
            height: "200px",
            width: "200px",
            backgroundImage: `radial-gradient(${color} 15%, transparent 16%)`,
            backgroundSize: "20px 20px",
            animation: "fade 2s infinite",
          }}
        />

        {/* Centered Welcome Message */}
        <div className="bg-white bg-opacity-25 rounded-lg p-4 shadow-lg backdrop-blur-lg">
          <h1 className="text-primary fw-bold mb-3">Welcome to LearnNest</h1>
          <p className="mb-2 text-secondary fs-4">We are the best in online teaching!</p>
          <p className="mb-2 text-secondary">Our courses are designed to meet your needs.</p>
          <p className="text-secondary">Join us today and start learning!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
