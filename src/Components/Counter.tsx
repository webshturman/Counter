import React from 'react';
import s from '../App.module.css'


export type CounterPropsType = {
    count: number
    maxCount:number
    correctData:boolean
    error:boolean
}


export const Counter: React.FC<CounterPropsType> = ({count, maxCount,correctData,error}) => {
    const limitClass = count === maxCount ? s.limit : ''
    const message =`enter values and press 'set'`
    const errorMessage =`Incorrect value!`
    let renderCounter = () => {
        if(error){
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
}