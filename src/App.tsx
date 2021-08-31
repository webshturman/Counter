import React, {ChangeEvent, useState} from 'react';
import s from './App.module.css'
import './App.css';
import {CountResult} from "./Components/CountResult";
import {CountSet} from "./Components/CountSet";

function App() {
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(1)

    const changingMinValue =(e:ChangeEvent<HTMLInputElement>)=> {
        let newMinValue = Number(e.currentTarget.value)
        setMinValue(newMinValue)
    }
    const changingMaxValue =(e:ChangeEvent<HTMLInputElement>)=> {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxValue(newMaxValue)
    }
    return (
        <div className={s.bothCounters}>
            <CountSet minValue={minValue} maxValue={maxValue} setMinValue={changingMinValue} setMaxValue={changingMaxValue}/>
           <CountResult minValue={minValue} maxValue={maxValue}/>
        </div>

    )
}

export default App;
