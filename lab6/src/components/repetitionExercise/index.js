import {useState} from "react"

//Rep Component
function Reps(props) {

  let [repTimes, setRepTimes] = useState(0)
    const reset = () => {
    setRepTimes(0);
    
  };
  return (
     <div>
      <p>{props.name}</p>
      <p>Reps: {repTimes}</p>
      <button onClick = {()=> {
        setRepTimes(repTimes+1)
        console.log(repTimes)
      }}>Complete Reps</button>
      <button onClick = {reset}>Reset</button>
      <button>Return</button>
    </div>
  );
}

export default Reps