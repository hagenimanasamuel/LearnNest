import React, { useRef, useEffect, useState } from "react";

export default function Greetings() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [history, setHistory] = useState([]); // To store the drawing history
  const [redoHistory, setRedoHistory] = useState([]); // To store redo states

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "white"; // Set default drawing color
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    setLastX(e.clientX - rect.left);
    setLastY(e.clientY - rect.top);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    setLastX(x);
    setLastY(y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    const currentImg = canvas.toDataURL(); // Save the current drawing state
    setHistory((prev) => [...prev, currentImg]);
    setRedoHistory([]); // Clear redo history after new drawing
  };

  const undo = () => {
    if (history.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const newHistory = [...history];
    const lastDrawing = newHistory.pop();

    if (lastDrawing) {
      setRedoHistory((prev) => [lastDrawing, ...prev]); // Save the undone state to redo history
    }

    const previousDrawing = newHistory[newHistory.length - 1];
    const img = new Image();
    img.src = previousDrawing || ""; // If history is empty, clear canvas
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (previousDrawing) {
        ctx.drawImage(img, 0, 0);
      }
      setHistory(newHistory); // Update the history
    };
  };

  const redo = () => {
    if (redoHistory.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const nextDrawing = redoHistory[0];
    const newRedoHistory = redoHistory.slice(1);

    const img = new Image();
    img.src = nextDrawing;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      setHistory((prev) => [...prev, nextDrawing]); // Add the redone drawing back to the history
      setRedoHistory(newRedoHistory); // Update redo history
    };
  };

  const reset = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    setHistory([]); // Clear drawing history
    setRedoHistory([]); // Clear redo history
  };

  return (
    <>
      <div
        className="app-container relative flex-grow flex flex-col items-center justify-center text-center bg-[#e8f7ff] overflow-hidden"
        style={{
          height: "calc(100vh - 92.5px)",
          backgroundImage: "url('/img/LearningUI/board-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="chalkboard p-4 bg-black bg-opacity-60 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-white text-3xl mb-4 flex relative top-12 underline">Kids Learning Board</h1>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="bg-none rounded-lg shadow-lg"
          />
          <div className="mt-4 flex space-x-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
              onClick={undo}
            >
              Undo
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              onClick={redo}
            >
              Redo
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
