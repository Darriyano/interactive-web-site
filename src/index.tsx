import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {StatesProvider} from "./pages/tapestriesStateHook";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StatesProvider>  {/* Wrap your App with StatesProvider */}
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StatesProvider>
    </React.StrictMode>
);



