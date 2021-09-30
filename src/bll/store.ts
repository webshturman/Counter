import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";



const rootReducer = combineReducers({
    counter: counterReducer
})
// // let PreloadedState= getFromStorage('set state',InitialState)
let PreloadedState
let IncomingState = localStorage.getItem('set count');
if(IncomingState !== null){
    PreloadedState = JSON.parse(IncomingState)
}


export const store = createStore(rootReducer, PreloadedState)


store.subscribe( ()=> {
    // localStorage.setItem('set state', JSON.stringify(store.getState()));
    localStorage.setItem('set count', JSON.stringify(store.getState()));
})



export type RootStateType = ReturnType<typeof rootReducer>

