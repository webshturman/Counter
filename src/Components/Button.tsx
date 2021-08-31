import React from 'react';
import s from '../App.module.css'

export type ButtonPropsType = {
    callback: () => void
    title: string
    count: boolean
}

export const Button: React.FC<ButtonPropsType> = ({callback, title, count}) => {
    return (
        <span><button disabled={count} className={s.buttons} onClick={callback}>{title}</button></span>
    )
}