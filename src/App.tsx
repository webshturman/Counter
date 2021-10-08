import React, {useState} from 'react';
import s from './App.module.css'
import './App.css';
import {CountResult} from "./Components/CountResult";
import {CountSet} from "./Components/CountSet";


function App() {
    return (
        <div className={s.bothCounters}>
            <CountSet/>
            <CountResult/>
        </div>
    )
}

export default App;
