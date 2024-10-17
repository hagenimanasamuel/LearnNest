import React, { useRef, useEffect, useState } from 'react';

export default function Greetings({ message = "What a Fuckin Kids Board!" }) {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const [history, setHistory] = useState([]); // To store drawing history
    const [currentDrawing, setCurrentDrawing] = useState(null); // To store current drawing

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 2; // Set the width of the drawing line
        ctx.lineCap = 'round'; // Round edges of the line
        ctx.strokeStyle = 'white'; // Color of the drawing
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
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        setLastX(x);
        setLastY(y);

        // Save current drawing state to history
        const currentImg = canvas.toDataURL();
        setCurrentDrawing(currentImg);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        if (currentDrawing) {
            setHistory((prev) => [...prev, currentDrawing]); // Save the drawing to history
        }
    };

    const undo = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (history.length === 0) return; // No more history to undo
        const previousDrawing = history[history.length - 1];
        const img = new Image();
        img.src = previousDrawing;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear current canvas
            ctx.drawImage(img, 0, 0); // Redraw previous state
            setHistory((prev) => prev.slice(0, -1)); // Remove last state from history
        };
    };

    const redo = () => {
        // Placeholder for redo functionality (if needed)
        // This will need a separate stack to track redo actions
        console.log("Redo functionality not implemented yet.");
    };

    const reset = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        setHistory([]); // Clear the history
        setCurrentDrawing(null); // Reset current drawing
    };

    return (
        <>
            <div className="chalkboard">
                <h1 className="text-white text-4xl">{message}</h1>
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={400}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="canvas"
                />
                <div className="controls">
                    <button className="control-button" onClick={undo}>Undo</button>
                    <button className="control-button" onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
}
