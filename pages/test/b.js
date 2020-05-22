import React, {
  useState,
  useEffect,
  useReducer,
  useLayoutEffect,
  useContext,
  useRef,
  memo,
  useMemo,
  useCallback
} from "react";
import { withRouter } from "next/router";
import Comp from "../../components/comp";
import MyContext from "../../lib/my-context";

function countReducer(state, action) {
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountFunc() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState("nick");

  const countRef = useRef();
  countRef.current = count;

  const config = useMemo(() => ({
    text: `count is ${count}`,
    color: count > 3 ? 'red' : 'blue'
  }), [count])

  // useEffect(() => {
  //   console.log("effect invoked");
  //   return () => {
  //     console.log("effect deteched");
  //   };
  // }, [name]);

  // const handleButtonClick = useCallback(() => dispatchCount({type: "add"}), [])

  const handleButtonClick = useMemo(() => () => dispatchCount({type: "add"}), [])

  const handleAlertButtonClick = function(){
    setTimeout(() => {
      alert(countRef.current)
    },2000)
  }

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Child config={config} onButtonClick={handleButtonClick}/>

      <button onClick={handleAlertButtonClick}>alertCount</button>

    </div>
  );
}

const Child = memo(function Child({ onButtonClick, config }) {
  console.log("child render");
  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  );
})

export default withRouter(MyCountFunc);
