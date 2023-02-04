import React, { useState } from 'react';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';



const App = () => {
  const [title, setTitle] = useState('Timer');
  const [isLight, setisLight] = useState(false);
  const [timeArr, settimeArr] = useState(["00:00:00"]);

  // const ChangeTitle = (new_title) => setTitle(new_title);

  const ChangeisLight = () => setisLight(!isLight);

  return (
    <div className='main' style={{ background: isLight ? "white" : "black", color: isLight ? "black" : "white" }}>
 
      <Hello title={title} setTitle={setTitle} />
      {console.log("333")}
      <div>
        {timeArr[timeArr.length-1]}
      </div>

      <Timer isLight={isLight} ChangeisLight={ChangeisLight} timeArr={timeArr} settimeArr={settimeArr} />
    </div >
  )
}



export default App;