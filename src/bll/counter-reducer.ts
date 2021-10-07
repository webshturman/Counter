import {ACTIONS_TYPE, ActionType} from "./actions";

// export let InitialState = {
//     minValue:0,
//     maxValue:1,
//     count:0
// }
// export type InitialStateType = typeof InitialState
//
// export const counterReducer = (state: InitialStateType = InitialState, action:ActionType):InitialStateType => {
//     switch (action.type) {
//         case ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE:
//         case ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE:
//         case ACTIONS_TYPE.RESET_COUNTER_RESULT_TYPE:
//             return {...state, ...action.payload}
//         case ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE:
//             return {...state, count:action.count +1}
//         default: return state
//     }
// }

export type InitialStateType ={
    countData: CountDataType
    correctData: boolean
}
export type CountDataType ={
    minValue:number
    maxValue:number
    count:number
}
export const InitialState:InitialStateType = {
    countData: {
        minValue:0,
        maxValue:1,
        count:0,
    },
    correctData: true,
}


export const counterReducer = (state: InitialStateType = InitialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE:
        case ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE:
        case ACTIONS_TYPE.RESET_COUNTER_RESULT_TYPE:
            return {...state, ...action.payload}
        case ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE:
            return {...state, countData: {...state.countData, count:action.count+1}}
        default: return state
    }
}