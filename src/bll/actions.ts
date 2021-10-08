export enum ACTIONS_TYPE {
    CHANGE_MAX_VALUE_TYPE = 'CounterSet/CHANGE_MAX_VALUE_TYPE',
    CHANGE_MIN_VALUE_TYPE = 'CounterSet/CHANGE_MIN_VALUE_TYPE',
    CHANGE_COUNTER_RESULT_TYPE = 'CounterResult/CHANGE_COUNTER_RESULT_TYPE ',
    RESET_COUNTER_RESULT_TYPE = 'CounterResult/RESET_COUNTER_RESULT_TYPE ',
}
export type ActionType = changeMinValueType | changeMaxValueType | changeCountResultType | resetCountResultType

export type changeMinValueType = {
    type:ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE,
    payload: {minValue:number,correctData:boolean}

}
export type changeMaxValueType = {
    type:ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE,
    payload: {maxValue:number,correctData:boolean}
}
export type changeCountResultType = {
    type:ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE,
    count:number
}
export type resetCountResultType = {
    type:ACTIONS_TYPE.RESET_COUNTER_RESULT_TYPE ,
    payload: {count:number, correctData:boolean}
}

export const changeMinValueAC = (minValue:number,correctData:boolean):changeMinValueType => {
    return {type:ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE, payload:{minValue,correctData}}
}
export const changeMaxValueAC = (maxValue:number,correctData:boolean):changeMaxValueType => {
    return {type:ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE, payload:{maxValue,correctData}}
}
export const changeCountResultAC = (count:number):changeCountResultType => {
    return {type:ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE, count}
}
export const resetCountResultAC = (count:number,correctData:boolean):resetCountResultType => {
    return {type:ACTIONS_TYPE.RESET_COUNTER_RESULT_TYPE, payload:{count,correctData}}
}