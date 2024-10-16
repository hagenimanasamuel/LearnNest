const Quiz = () => {
    const [score, setScore] = React.useState(0);
    
    const handleAnswer = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
        alert("Great job!");
      } else {
        alert("Try again!");
      }
    };
  
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl">What is 2 + 2?</h2>
        <button onClick={() => handleAnswer(true)}>4</button>
        <button onClick={() => handleAnswer(false)}>3</button>
      </div>
    );
  };
  