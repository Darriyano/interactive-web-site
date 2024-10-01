import "../styles/main-page.css"
import Table from "../images/arts-drafts/1page/table.png"
import Window from "../images/arts-drafts/1page/window.png"
import React, {useState} from "react";
import {useNavigate} from "react-router";


const MainPage = () => {
    const navigate = useNavigate();

    const [isClicked, setClicked] = useState<boolean>(false);
    const [isEntered, setEntered] = useState<string>("");
    const codes = ['DaryaDarya', 'MisterMyBeloved', 'cringe', 'dsa']

    const clicked = () => {
        setClicked(!isClicked);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEntered(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (codes.includes(isEntered)) {
                setEntered('');
                clicked();
                navigate("/gobelens");
                return;
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
                    <input className='input-field' type='text' value={isEntered}
                           onChange={handleChange}
                           onKeyDown={handleKeyPress}/>
                </div>
            }
        </>
    )
}

export default MainPage