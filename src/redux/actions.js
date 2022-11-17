import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from "./types";

function addItemToLocalStorage(item) {
  return (dispatch) => {
    console.log(item);
  };
}

//TODO: add the ability to update tasks
//TODO: get getItemsFromLocalStorage to update state and render the todo list
//TODO: use addItemToLocalStorage to update localStorage
//TODO: make sure that what's in localStorage is the same as what's in the UI
//TODO: create a loader that spins on the screen until the data is loaded
//TODO: change to typescript

const getBrandFonts = new Promise((resolve, reject) => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  setTimeout(() => {
    if (itemsFromLocalStorage.length === 0) {
      resolve([]);
    }
    if (itemsFromLocalStorage.length > 0) {
      resolve(itemsFromLocalStorage);
    }
    reject("couldnt get items from local storage");
  }, 1500);
});

function getItemsFromLocalStorage() {
  return (dispatch) => {
    getBrandFonts
      .then((res) => dispatch({ type: GET_ITEMS_SUCCESS, payload: res }))
      .catch((error) => dispatch({ type: GET_ITEMS_ERROR, payload: error }));
  };
}

export { addItemToLocalStorage, getItemsFromLocalStorage };
