import Item from "./Item";

const TimeList = (props) => {
  return (
    <div className="TimeList">
      {props.timeArr.map((time) => (
        <Item key={Math.random()} time={time}/>
      ))
      }
    </div>
  );
};

export default TimeList;
