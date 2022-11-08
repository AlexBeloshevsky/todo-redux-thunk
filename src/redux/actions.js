function fetchingJoke() {
  return (dispatch) => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((resp) => resp.json())
      .then((joke) => dispatch(fetchedJoke(joke)));
  };
}

function fetchedJoke(joke) {
  return {
    type: "FETCHED_JOKE",
    payload: joke,
  };
}

export { fetchingJoke };
