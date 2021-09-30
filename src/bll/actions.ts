export enum ACTIONS_TYPE {
    CHANGE_MAX_VALUE_TYPE = 'CounterSet/CHANGE_MAX_VALUE_TYPE',
    CHANGE_MIN_VALUE_TYPE = 'CounterSet/CHANGE_MIN_VALUE_TYPE',
    CHANGE_COUNTER_RESULT_TYPE = 'CounterResult/CHANGE_COUNTER_RESULT_TYPE ',
}
export type ActionType = changeMinValueType | changeMaxValueType | changeCountResultType

export type changeMinValueType = {
    type:ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE,
    payload: {minValue:number}

}
export type changeMaxValueType = {
    type:ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE,
    payload: {maxValue:number}
}
export type changeCountResultType = {
    type:ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE,
   count:number
}
export const changeMinValueAC = (minValue:number):changeMinValueType => {
    return {type:ACTIONS_TYPE.CHANGE_MIN_VALUE_TYPE, payload:{minValue}}
}
export const changeMaxValueAC = (maxValue:number):changeMaxValueType => {
    return {type:ACTIONS_TYPE.CHANGE_MAX_VALUE_TYPE, payload:{maxValue}}
}
export const changeCountResultAC = (count:number):changeCountResultType => {
    return {type:ACTIONS_TYPE.CHANGE_COUNTER_RESULT_TYPE, count}
}