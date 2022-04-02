import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./action";

export default function App() {
  const counter = useSelector((state) => state.counter); //useSelector pulls the data from th store
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>The counter is: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Some valuable infomation you should not see</h3> : ""}
    </div>
  );
}
//to increment by 5 pass 5 in the parameter
