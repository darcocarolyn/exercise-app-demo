import {useState, useEffect} from "react"
// Timer Component
function Timer(props) {
 const [time, setTime] = useState(0);
 const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
  if (isRunning) {
    const id = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    setIntervalId(id);
  } else {
    clearInterval(intervalId);
  }

  return () => clearInterval(intervalId);
}, [isRunning]);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
 const handleStartStop = () => {
    setIsRunning(running => !running);
  };

  const handleReset = () => {
    setTime(0);
  };
  return (
     <div>
      <p>{props.name}</p>
      {`${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`}
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      <button>Return</button>
      </div>
    </div>
  );
}

export default Timer