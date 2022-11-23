import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, SET_LOADING } from "./types";

function addItemToLocalStorage(item) {
  return (dispatch, getState) => {
    const { items } = getState();
    const itemsToLocalStorage = items.items;
    itemsToLocalStorage.push(item);

    localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
    dispatch({ type: GET_ITEMS_SUCCESS, payload: itemsToLocalStorage });
  };
}

function removeItemFromLocalStorage(item) {
  return (dispatch, getState) => {
    const { items } = getState();
    const itemsToLocalStorage = items.items;
    itemsToLocalStorage.splice(itemsToLocalStorage.indexOf(item), 1);

    localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
    dispatch({ type: GET_ITEMS_SUCCESS, payload: itemsToLocalStorage });
  };
}

//todo add animation to the delete button

function updateItem(index, item) {
  return (dispatch, getState) => {
    const { items } = getState();
    const itemsToLocalStorage = items.items;
    itemsToLocalStorage[index] = item;
    localStorage.setItem("items", JSON.stringify(itemsToLocalStorage));
    dispatch({ type: GET_ITEMS_SUCCESS, payload: itemsToLocalStorage });
  };
}

const getDataFromLocalStorage = new Promise((resolve, reject) => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  setTimeout(() => {
    if (!itemsFromLocalStorage) {
      resolve([]);
    }
    if (itemsFromLocalStorage.length > 0) {
      resolve(itemsFromLocalStorage);
    }
    reject("couldnt get items from local storage");
  }, 500);
});

function getItemsFromLocalStorage() {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const res = await getDataFromLocalStorage;
      dispatch({ type: SET_LOADING, payload: false });
      dispatch({ type: GET_ITEMS_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: GET_ITEMS_ERROR, payload: error });
    }
  };
}

export {
  addItemToLocalStorage,
  getItemsFromLocalStorage,
  removeItemFromLocalStorage,
  updateItem,
};
