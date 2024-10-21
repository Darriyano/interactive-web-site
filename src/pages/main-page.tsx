import "../styles/main-page.css"
import Table from "../images/arts-drafts/1page/table.png"
import Window from "../images/arts-drafts/1page/window.png"
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {bookCodes} from "./codes";


const MainPage = () => {
    const navigate = useNavigate();

    const [shake, setShake] = useState<boolean>(false);  // State to control shake animation
    const [isClicked, setClicked] = useState<boolean>(false); // State to control if input clicked
    const [isEntered, setEntered] = useState<string>(""); // State to control input

    const clicked = () => {
        setClicked(!isClicked);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEntered(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (bookCodes.includes(isEntered.toLowerCase())) {
                setEntered('');
                clicked();
                navigate("/tapestries");
                return;
            } else {
                setShake(true);  // Trigger shake animation
                setTimeout(() => setShake(false), 500);  // Remove the shake class after animation
            }
            setEntered('');

        }
    };

    return (
        <>
            {
                !isClicked ? (
                    <div className='main-page'>
                        <img src={Table} alt='' className='table'/>
                        <img src={Window} alt='' className='window'/>
                        <div className='clickable-block' onClick={clicked}></div>
                    </div>
                ) : <div className='main-page'>
                    <img src={Table} alt='' className='table' style={{filter: 'blur(7px)'}}/>
                    <img src={Window} alt='' className='window' style={{filter: 'blur(7px)'}}/>
                    <div className={`input-wrapper ${shake ? 'shake' : ''}`}>
                        <input className="input-field"
                               type='text'
                               value={isEntered}
                               onChange={handleChange}
                               onKeyDown={handleKeyPress}/>
                    </div>
                </div>
            }
        </>
    )
}

export default MainPage