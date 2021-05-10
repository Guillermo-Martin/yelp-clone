import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./../../actions/counterActions";

function Counter() {
  // extract state from the store
  let count = useSelector(state => state.count);

  // save dispatch to a variable
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Test</h1>
      <h2>Current count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Add 1</button>
    </div>
  );
}

export default Counter;
