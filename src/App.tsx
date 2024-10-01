import React from 'react';
import './App.css';
import MainPage from "./pages/main-page";
import {Route, Routes} from "react-router"
import GobelenPage from "./pages/gobelen-page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/gobelens" element={<GobelenPage/>}/>
            </Routes>
        </>
    );
}

export default App;
