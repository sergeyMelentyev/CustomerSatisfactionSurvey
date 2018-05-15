import Dispatcher from "./TestAppDispatcher";

export const addItem = (newItem) => {
    const value = new Object();
    Object.defineProperties(value, {
        "value": {value: newItem, writable: true, enumerable: true, configurable: true},
        "id": {value: Math.random().toString(36).substr(2, 9), writable: true, enumerable: true, configurable: true},
        "packed": {value: false, writable: true, enumerable: true, configurable: true}
    });
    Dispatcher.dispatch({ type: "ADD_NEW_ITEM", value });
};
export const toggleItem = (item) => {
    Dispatcher.dispatch({ type: "TOGGLE_ITEM", item });
};
export const removeItem = (itemToRemove) => {
    Dispatcher.dispatch({ type: "REMOVE_ITEM", itemToRemove });
};