import React from 'react';
import './App.css';
import MainPage from "./pages/main-page";
import {Route, Routes} from "react-router"
import TapestryPage from "./pages/tapestry-page";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/tapestries" element={<TapestryPage/>}/>
            </Routes>
        </>
    );
}

export default App;
