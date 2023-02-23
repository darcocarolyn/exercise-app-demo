import {useEffect, useState} from "react"
//Lap Component
function Laps (props) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [lapTimes, setLapTimes] = useState([]);

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



  const handleStartStop = () => {
    setIsRunning(running => !running);
  };

  const handleReset = () => {
    setTime(0);
  };

  const handleRecordLap = () => {
    setLapTimes([...lapTimes, time]);
  };

  const RecordTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <p>{props.name}</p>
      {RecordTime(time)}
      <div>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRecordLap}>Record Lap</button>
      <button>Return</button>
      </div>
      <p>Times Recorded:</p>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{RecordTime(lapTime)}</li>
        ))}
      </ul>
    </div>
  );
}
export default Laps
