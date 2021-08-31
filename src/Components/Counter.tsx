import React from 'react';
import s from '../App.module.css'


export type CounterPropsType = {
    count: number
    maxCount:number
}


export const Counter: React.FC<CounterPropsType> = ({count, maxCount}) => {
    const limitClass = count === maxCount ? s.limit : ''
    return (
        <div className={limitClass}>{count}</div>
    )
}