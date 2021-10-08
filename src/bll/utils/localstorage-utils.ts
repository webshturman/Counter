
import {RootStateType, store} from "../store";


// export const getFromStorage = (key:string, defaultValue:InitialStateType)=> {
//     let newValue = defaultValue
//     let storageItem = localStorage.getItem(key);
//     if(storageItem !== null){
//         newValue = JSON.parse(storageItem)
//     }
//     return newValue
// }
// export const setToStorage =(key:string, value:InitialStateType)=> {
//     localStorage.setItem(key,JSON.stringify(value));
// }

export const getFromStorage = () => {
    try {
        let storageItem = localStorage.getItem('set count');
        if (storageItem === null) {
            return undefined
        }
        return JSON.parse(storageItem)
    } catch (err) {
        return undefined
    }
}
export const setToStorage = (state: RootStateType) => {
    try {
        localStorage.setItem('set count', JSON.stringify(state))
    } catch {

    }
}