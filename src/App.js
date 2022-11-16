import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToLocalStorage,
  getItemsFromLocalStorage,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleUpdatingtasks = () => {
    dispatch(addItemToLocalStorage(inputValue));
  };

  setTimeout(() => {
    dispatch(getItemsFromLocalStorage());
  }, 1000);

  const items = useSelector((state) => state);

  console.log(items);

  return (
    <div className="App">
      <h1>Basic Todo app with Redux and Thunk</h1>
      <input
        type="text"
        placeholder="enter tasks..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={handleUpdatingtasks}>Add task to localStorage</button>
    </div>
  );
}

export default App;
