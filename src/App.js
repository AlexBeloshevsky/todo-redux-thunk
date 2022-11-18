import "./App.css";
import React, { useEffect, useState } from "react";
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

  const { loading, items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsFromLocalStorage());
  }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item} value={item} onClick={() => {}}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
