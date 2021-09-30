import {InitialStateType} from "../counter-reducer";


export const getFromStorage = (key:string, defaultValue:InitialStateType)=> {
    let newValue = defaultValue
    let storageItem = localStorage.getItem(key);
    if(storageItem !== null){
        newValue = JSON.parse(storageItem) as InitialStateType
    }
    return newValue
}
export const setToStorage =(key:string, value:InitialStateType)=> {
    localStorage.setItem(key,JSON.stringify(value));
}