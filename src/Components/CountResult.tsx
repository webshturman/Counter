import React from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";
import {changeCountResultAC, resetCountResultAC} from "../bll/actions";


export const CountResult: React.FC = React.memo((props) => {
    const dispatch = useDispatch()
    const {
        minValue,
        maxValue,
        count,
        correctData
    } = useSelector<RootStateType, InitialStateType>(state => state.counter)
    const changeCount = () => {
        dispatch(changeCountResultAC(count))
    }
    const resetCount = () => {
        dispatch(resetCountResultAC(minValue, true))
    }
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <Counter/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={changeCount} title={'Inc'} condition={count === maxValue || !correctData}/>
                <Button callback={resetCount} title={'Reset'} condition={count === minValue || !correctData}/>
            </div>
        </div>
    );
});
