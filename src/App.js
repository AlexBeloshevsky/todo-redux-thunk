import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingJoke,
  addItemToLocalStorage,
  getItemsFromLocalStorage,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  // const joke = useSelector((state) => state.joke);
  // const [showPunchline, setShowPunchline] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleUpdatingtasks = () => {
    dispatch(addItemToLocalStorage(inputValue));
    // setInputValue("");
  };

  function handleChange(event) {
    console.log(event.target.value);
  }

  useEffect(() => {
    dispatch(getItemsFromLocalStorage());
  }, [dispatch]);

  // const handleNewJokeClick = () => {
  //   dispatch(fetchingJoke());
  //   setShowPunchline(false);
  // };

  return (
    <div className="App">
      {/* <h1>Basic Joke Application</h1>
      {joke && (
        <>
          <h2>{joke.setup}</h2>
          {showPunchline ? (
            <h2>{joke.punchline}</h2>
          ) : (
            <button onClick={() => setShowPunchline(true)}>
              Show Punchline
            </button>
          )}
        </>
      )}
      <button onClick={handleNewJokeClick}>Get a new joke</button> */}
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
