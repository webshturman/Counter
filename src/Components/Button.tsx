import React from 'react';
import s from '../App.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {CountDataType, InitialStateType} from "../bll/counter-reducer";

export type ButtonPropsType = {
    callback: () => void
    title: string
    condition?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({callback, title,condition}) => {
    const {minValue, maxValue} = useSelector<RootStateType, CountDataType>( state => state.counter.countData)
    return (
        <span><button disabled={minValue >= maxValue || minValue < 0 || condition} className={s.buttons} onClick={callback}>
            {title}</button></span>
    )
}