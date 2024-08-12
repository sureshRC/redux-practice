import { useSelector, useDispatch } from "react-redux";
import {
  setCountIncrement,
  setCountDecrement,
  setCountIncrementByAmount5
} from "../Redux/Slices/CounterSlice";

const CounterComponent = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  console.log("Count value is " + count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(setCountIncrement());
  };

  const handleDecrement = () => {
    dispatch(setCountDecrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(setCountIncrementByAmount5(5));
  };

  return (
    <>
      <h3>Counter : {count}</h3>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByAmount}>+5</button>
    </>
  );
};

export default CounterComponent;
