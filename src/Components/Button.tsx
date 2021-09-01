import React from 'react';
import s from '../App.module.css'

export type ButtonPropsType = {
    callback: () => void
    title: string
    condition: boolean
}

export const Button: React.FC<ButtonPropsType> = ({callback, title, condition}) => {
    return (
        <span><button disabled={condition} className={s.buttons} onClick={callback}>{title}</button></span>
    )
}