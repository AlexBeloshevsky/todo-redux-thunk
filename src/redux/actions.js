function addItemToLocalStorage(item) {
  return (dispatch) => {
    console.log(item);
  };
}
//TODO: take the localStorage.getItem function outside and wrap it in a promise
//TODO: add the ability to update tasks
//TODO: get getItemsFromLocalStorage to update state and render the todo list
//TODO: use addItemToLocalStorage to update localStorage
//TODO: make sure that what's in localStorage is the same as what's in the UI
//TODO: create a loader that spins on the screen until the data is loaded
//TODO: change to typescript

function getItemsFromLocalStorage() {
  return async (dispatch) => {
    function onSuccess(success) {
      // dispatch({ type: CREATE_USER, payload: success });
      // return success;
      console.log(success);
    }
    function onError(error) {
      // dispatch({ type: ERROR_GENERATED, error });
      // return error;
      console.log("error");
    }
    try {
      const success = await localStorage.getItem("items");
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
}

export { addItemToLocalStorage, getItemsFromLocalStorage };
