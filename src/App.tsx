import React from 'react';
import './App.css';
import MainPage from "./pages/main-page";
import {Route, Routes} from "react-router"
import TapestryPage from "./pages/tapestry-page";
import BillEyeComponent from "./pages/all-solved";
import BillParallax from "./pages/BillParallax";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/tapestries" element={<TapestryPage/>}/>
                <Route path="/solved-tapestries" element={<BillEyeComponent/>}/>
                <Route path="/bill-parallax" element={<BillParallax/>}/>
            </Routes>
        </>
    );
}

export default App;
