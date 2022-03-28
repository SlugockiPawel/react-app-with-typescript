import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dialog} from "./components/common/Dialog/Dialog";
import {CryptoPrice} from "./components/CryptoPrice/CryptoPrice";

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <CryptoPrice/>
            </header>
        </div>
    );
}


