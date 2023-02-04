import Item from "./Item";

const TimeList = (props) => {
  const test= [];
  return (
    <div className="TimeList">
      {props.timeArr.map((c) => (
        <Item key={Math.random()}>{c}</Item>
      ))
      }
    </div>
  );
};

export default TimeList;
