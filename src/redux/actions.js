import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, SET_LOADING } from "./types";

function addItemToLocalStorage(item) {
  return (dispatch) => {
    console.log(item);
  };
}

//TODO: add the ability to update tasks
//TODO: use addItemToLocalStorage to update localStorage
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
    dispatch({ type: SET_LOADING, payload: true });
    getBrandFonts
      .then((res) => dispatch({ type: GET_ITEMS_SUCCESS, payload: res }))
      .then((res) => dispatch({ type: SET_LOADING, payload: false }))
      .catch((error) => dispatch({ type: GET_ITEMS_ERROR, payload: error }));
  };
}

export { addItemToLocalStorage, getItemsFromLocalStorage };
