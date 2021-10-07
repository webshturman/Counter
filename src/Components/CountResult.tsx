import React from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {CountDataType} from "../bll/counter-reducer";
import {changeCountResultAC, resetCountResultAC} from "../bll/actions";

type CountResultPropsType ={
    correctData:boolean
}

export const CountResult: React.FC<CountResultPropsType> = React.memo(({correctData}) => {
    const dispatch = useDispatch()
    const {minValue, maxValue, count} = useSelector<RootStateType, CountDataType>( state => state.counter.countData)

    const changeCount = () => {
        dispatch(changeCountResultAC(count))
    }
    const resetCount = () => {
        dispatch(resetCountResultAC(minValue))
    }
    return (
        <div className={s.container}>
            <div className={s.counter}>
                {/*<Counter count={count} maxCount={maxValue} correctData={correctData}/>*/}
                <Counter correctData={correctData}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={changeCount} title={'Inc'} condition={count === maxValue || !correctData}/>
                <Button callback={resetCount} title={'Reset'} condition={count === minValue || !correctData}/>
            </div>
        </div>
    );
});
