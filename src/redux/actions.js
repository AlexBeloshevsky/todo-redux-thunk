function addItemToLocalStorage(item) {
  return (dispatch) => {
    console.log(item);
  };
}

//TODO: get getItemsFromLocalStorage to update state and render the todo list
//TODO: use addItemToLocalStorage to update localStorage
//Todo: make sure that what's in localStorage is the same as what's in the UI

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
