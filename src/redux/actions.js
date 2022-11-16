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

const getBrandFonts = async (): Promise => {
  try {
    const res = (await localStorage.getItem("items")) || "";
    return res;
  } catch (error) {
    throw error;
  }
};

function getItemsFromLocalStorage() {
  return async (dispatch) => {
    function onSuccess(success) {
      dispatch({ type: GET_ITEMS_SUCCESS, payload: success });
    }
    function onError(error) {
      dispatch({ type: GET_ITEMS_ERROR, error });
      console.log("error");
    }
    try {
      const success = await getBrandFonts();
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}

export { addItemToLocalStorage, getItemsFromLocalStorage };
