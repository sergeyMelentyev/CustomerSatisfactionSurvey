import EventEmitter from "events";
import Dispatcher from "./TestAppDispatcher";

let store = [
    {value: "Pants", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Jacket", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Charger", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "NoteBook", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Hat", id: Math.random().toString(36).substr(2, 9), packed: false},
    {value: "Sleeping Pills", id: Math.random().toString(36).substr(2, 9), packed: true},
    {value: "Passport", id: Math.random().toString(36).substr(2, 9), packed: true},
    {value: "Sandwich", id: Math.random().toString(36).substr(2, 9), packed: true}
];

class TestAppStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(action => {
            if (action.type === "ADD_NEW_ITEM") {
                store = [action.value, ...store];
                this.emit("change");
            }
            if (action.type === "REMOVE_ITEM") {
                store = store.filter(storeItem => storeItem.id !== action.itemToRemove.id);
                this.emit("change");
            }
            if (action.type === "TOGGLE_ITEM") {
                store = store.map(item => {
                    if (item.id !== action.item.id) return item;
                    item.packed = !action.item.packed;
                    return item;
                });
                this.emit("change");
            }
        })
    }
    getStore() {
        return store;
    }
}
export default new TestAppStore();