import React from 'react';
import s from '../App.module.css'


export type CounterPropsType = {
    count: number
    maxCount:number
    correctData:boolean
}


export const Counter: React.FC<CounterPropsType> = ({count, maxCount,correctData}) => {
    const limitClass = count === maxCount ? s.limit : ''
    const message =`enter values and press 'set'`
    return (
        <>
            {correctData ?<div className={limitClass}>{count}</div> : <div className={s.message}>{message}</div>}
        </>
    )
}