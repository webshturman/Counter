import React from 'react';
import s from '../App.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";


export const Counter: React.FC = React.memo((props) => {
    const {
        minValue,
        maxValue,
        count,
        correctData
    } = useSelector<RootStateType, InitialStateType>(state => state.counter)
    const limitClass = count === maxValue ? s.limit : ''
    const message = `enter values and press 'set'`
    const errorMessage = `Incorrect value!`
    let renderCounter = () => {
        if (minValue >= maxValue || minValue < 0) {
            return <div className={s.errorClass}>{errorMessage}</div>
        } else {
            return correctData ? <div className={limitClass}>{count}</div> : <div className={s.message}>{message}</div>
        }
    }
    return (
        <>
            {renderCounter()}

        </>

    )
});