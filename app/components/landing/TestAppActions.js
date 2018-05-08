import AppDispatcher from "./TestAppDispatcher";

export const updateCounterOnIncrement = (value) => {
    AppDispatcher.dispatch({ type: "INCREMENT_COUNTER", value });
};

export const updateCounterOnDecrement = (value) => {
    AppDispatcher.dispatch({ type: "DECREMENT_COUNTER", value });
};

export const updateCounterOnRest = () => {
    AppDispatcher.dispatch({ type: "RESET_COUNTER" });
};
