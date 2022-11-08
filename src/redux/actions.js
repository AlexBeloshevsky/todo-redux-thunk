function fetchingJoke() {
  return (dispatch) => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((resp) => resp.json())
      .then((joke) => dispatch(fetchedJoke(joke)));
  };
}

function addItemToLocalStorage(item) {
  return (dispatch) => {
    console.log(item);
  };
}

function getItemsFromLocalStorage() {
  //TODO: make this function async with setTimeout
  return (dispatch) => {
    console.log(localStorage.getItem("items"));
  };
}

function fetchedJoke(joke) {
  return {
    type: "FETCHED_JOKE",
    payload: joke,
  };
}

export { fetchingJoke, addItemToLocalStorage, getItemsFromLocalStorage };
