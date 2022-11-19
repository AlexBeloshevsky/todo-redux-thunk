import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToLocalStorage,
  getItemsFromLocalStorage,
  removeItemFromLocalStorage,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleUpdatingtasks = () => {
    dispatch(addItemToLocalStorage(inputValue));
  };

  const handleDelete = (item) => {
    dispatch(removeItemFromLocalStorage(item));
  };

  const { loading, items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsFromLocalStorage());
    setInputValue("");
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
      <button onClick={handleUpdatingtasks} style={{ marginBottom: "40px" }}>
        Add task to localStorage
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "450px",
            margin: "0 auto",
          }}
        >
          {items.map((item) => (
            <li key={item} value={item} onClick={() => {}}>
              <button
                onClick={(event) => {
                  handleDelete(event.target.value);
                }}
                style={{ marginRight: "25px" }}
                value={item}
              >
                Delete task
              </button>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
