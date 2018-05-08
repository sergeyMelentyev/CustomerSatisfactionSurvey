import EventEmitter from "events";
import AppDispatcher from "./TestAppDispatcher";

let counter = {
    count: 0
};

class CounterStore extends EventEmitter {
    constructor() {
        super();
        AppDispatcher.register(action => {
            if (action.type === "INCREMENT_COUNTER") {
                counter.count += action.value;
                this.emit("change");
            }
            if (action.type === "DECREMENT_COUNTER") {
                counter.count -= action.value;
                this.emit("change");
            }
            if (action.type === "RESET_COUNTER") {
                counter.count = 0;
                this.emit("change");
            }
        });
    }
    getState() {
        return counter;
    }
}

export default new CounterStore();