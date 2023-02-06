import React, { useState } from 'react';
import './style.css'
import Hello from './Hello';
import Timer from './Timer';



const App = () => {
  const [title, setTitle] = useState('Timer');
  const [isLight, setisLight] = useState(false);
  const [timeArr, settimeArr] = useState([]);

  const ChangeisLight = () => setisLight(!isLight);

  return (
    <div className='main' style={{ background: isLight ? "white" : "black", color: isLight ? "black" : "white" }}>
 
      <Hello title={title} setTitle={setTitle} />
      <Timer isLight={isLight} ChangeisLight={ChangeisLight} timeArr={timeArr} settimeArr={settimeArr} />
    </div >
  )
}



export default App;