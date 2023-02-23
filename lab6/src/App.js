import './App.css';
import { useState} from "react";

import Timer from "./components/durationExcercise/index.js"
import Reps from "./components/repetitionExercise/index.js"
import Laps from "./components/runningExercise/index.js"



function App() {
  const [myLaps, setmyLaps] = useState(false)
  const [myReps, setmyReps] = useState(false);
  const [myTimer, setmyTimer] = useState(false);
  const [Selection, setSelection] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("");



  function handleSelectExercise(exercise) {
    setSelectedExercise(exercise.name);
    if (exercise.type === "reps") {
      setmyReps(true);
      setSelection(true);
    } else if (exercise.type === "timer") {
      setmyTimer(true);
      setSelection(true);
    } else if (exercise.type === "laps") {
      setmyLaps(true);
      setSelection(true);
    }
  }

  return (
  <div>
    {Selection ? (
      <>
        {myReps ? <Reps name={selectedExercise} /> : null}
        {myTimer ? <Timer name={selectedExercise} /> : null}
        {myLaps ? <Laps name={selectedExercise} /> : null}
      </>
    ) : (
      <>
        <Menu selectExercise={handleSelectExercise}/>
      </>
    )}
  </div>
);
}
export default App

let exerciseList = [
  {type: "reps", name: "Push Ups"},
  {type: "reps", name: "Jumping Jacks"},
  {type: "reps", name: "Sit Ups"},
  {type: "timer", name: "Running"},
  {type: "timer", name: "Bicycling"},
  {type: "laps", name: "Swimming"},


]
// Menu Component
function Menu(props) {
  const buttons = exerciseList.map((exercise, index) => {
    return (
      <div key={index}>
        <button onClick={() => props.selectExercise(exercise)}>
          {exercise.name}
        </button>
        <br></br>
        </div>
    );
  });

  return (
    <div>
      <h1>Go Do Something!</h1>
      <p>Select an Exercise:</p>
      <ul>
        {buttons}
      </ul>
    </div>
  );
}



