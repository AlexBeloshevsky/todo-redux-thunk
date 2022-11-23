import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToLocalStorage,
  getItemsFromLocalStorage,
  removeItemFromLocalStorage,
  updateItem,
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

  const handleUpdate = (index) => {
    dispatch(updateItem(index, inputValue));
    setInputValue("");
  };

  const { loading, items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItemsFromLocalStorage());
    setInputValue("");
  }, []);

  //todo add another input for task to update and a button for each li so it can be updated with the input value

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
            alignItems: "center",
            width: "450px",
            margin: "0 auto",
            padding: "0",
          }}
        >
          {items.map((item, index) => (
            <li
              className="taskItem"
              key={index}
              value={item}
              onClick={() => {}}
            >
              <button
                className="updateButton"
                onClick={(event) => {
                  handleUpdate(index);
                }}
                value={item}
              >
                Update task
              </button>
              {item}
              <button
                className="deleteButton"
                onClick={(event) => {
                  handleDelete(event.target.value);
                }}
                value={item}
              >
                Delete task
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
