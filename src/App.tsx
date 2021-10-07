import React, {useState} from 'react';
import s from './App.module.css'
import './App.css';
import {CountResult} from "./Components/CountResult";
import {CountSet} from "./Components/CountSet";
import {useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {InitialStateType} from "./bll/counter-reducer";




function App() {
    // const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>( state => state.counter)
    let [correctData, setCorrectData] = useState(true)
    // const error = minValue >= maxValue || minValue < 0

 //----------------------------------------------------------------------------------------------
    return (
        <div className={s.bothCounters}>
            <CountSet setCorrectData={setCorrectData}/>
           <CountResult correctData={correctData}/>
        </div>
    )
}

export default App;
