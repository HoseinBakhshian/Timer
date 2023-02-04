import React, { useState, useEffect } from 'react';
import './style.css'
import TimeList from "./TimeList"

var x;

const Timer = (props) => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);



    useEffect(() => {
        if ((second) === 60) {
            setSecond(0);
            setMinute(minute => minute + 1)
        }
        if (minute === 60) {
            setMinute(0);
            setHour(hour => hour + 1)
        }
    }, [second, minute]);

    const start = () => {
        x = setInterval(() => {
            setSecond(second => second + 1);
        }, 1000);
    }

    const stop = () => {
        clearInterval(x);
    }

    const reset = () => {
        clearInterval(x);
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    const show = () => {
        let newtime = `${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`;
        props.settimeArr([...props.timeArr, newtime]);
    }

    return (
        <>
            <h2 className='timer' onClick={show}>
                {`${hour > 9 ? hour : '0' + hour}:${minute > 9 ? minute : '0' + minute}:${second > 9 ? second : '0' + second}`}
            </h2>
            <div>
                {console.log("111")}
                <button onClick={start} style={{ color: props.isLight ? "black" : "white" }}>Start</button>
                <button onClick={stop} style={{ color: props.isLight ? "black" : "white" }}>Stop</button>
                <button onClick={reset} style={{ color: props.isLight ? "black" : "white" }}>Reset</button>
                <button onClick={props.ChangeisLight} style={{ color: props.isLight ? "black" : "white" }}>change</button>


            </div>
            {/* <TimeList>
                {console.log("222")}

                {props.timeArr}
            </TimeList> */}

            <TimeList timeArr={props.timeArr}/>


        </>
    )

}

export default Timer;