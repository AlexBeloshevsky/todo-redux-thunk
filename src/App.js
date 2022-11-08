import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingJoke } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.joke);
  const [showPunchline, setShowPunchline] = useState(false);

  useEffect(() => {
    dispatch(fetchingJoke());
  }, [dispatch]);

  const handleNewJokeClick = () => {
    dispatch(fetchingJoke());
    setShowPunchline(false);
  };

  return (
    <div className="App">
      <h1>Basic Joke Application</h1>
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
      <button onClick={handleNewJokeClick}>Get a new joke</button>
    </div>
  );
}

export default App;
