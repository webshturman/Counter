import React from 'react';
import s from '../App.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {CountDataType, InitialStateType} from "../bll/counter-reducer";


export type CounterPropsType = {
    // count: number
    // maxCount:number
    correctData:boolean
    // error:boolean
}


export const Counter: React.FC<CounterPropsType> = React.memo(({correctData}) => {
    const {minValue, maxValue, count} = useSelector<RootStateType, CountDataType>( state => state.counter.countData)
    // const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>( state => state.counter)
    const limitClass = count === maxValue ? s.limit : ''
    const message =`enter values and press 'set'`
    const errorMessage =`Incorrect value!`
    let renderCounter = () => {
        if(minValue >= maxValue || minValue < 0){
            return <div className={s.errorClass }>{errorMessage}</div>
        } else {
           return correctData ?  <div className={limitClass}>{count}</div> : <div className={s.message}>{message}</div>
        }
    }
    return (
        <>
            {renderCounter()}

        </>

    )
});