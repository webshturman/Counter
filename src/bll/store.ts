import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {getFromStorage, setToStorage} from "./utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = createStore(rootReducer, getFromStorage())

store.subscribe( ()=> {
    setToStorage( {
        counter: store.getState().counter
    })
})

export type RootStateType = ReturnType<typeof rootReducer>

