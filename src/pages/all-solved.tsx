import React, {useState, useEffect} from 'react';
import BILLGIF from '../images/arts-drafts/animations/billYN.gif'
import '../styles/gif-page.css'
import BillBody from '../images/arts-drafts/3page/angrybill.png'
import BillEye from '../images/arts-drafts/3page/eyeangry.png'
import {billEyeCodes} from "./codes";
import {useNavigate} from "react-router";


const BillEyeComponent = () => {
    const navigate = useNavigate();

    const [showGif, setShowGif] = useState(true);
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
            if (billEyeCodes.includes(isEntered.toLowerCase())) {
                setEntered('');
                clicked();
                navigate("/bill-parallax");
                return;
            } else {
                setShake(true);  // Trigger shake animation
                setTimeout(() => setShake(false), 500);  // Remove the shake class after animation
            }
            setEntered('');

        }
    };

    // Устанавливаем таймер для переключения на статичный элемент
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowGif(false); // Скрываем GIF и показываем статичный элемент
        }, 19300); // Время показа GIF (например, 5 секунд)

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
    }, []);

    return (
        <div className='gif-container'>
            {showGif ? (
                <img className='loading-gif' src={BILLGIF} alt="Loading..."/>
            ) : (
                !isClicked ? (
                    <div className='static-element'>
                        {/* Статичный элемент, который появится после GIF */}
                        <img src={BillBody} alt="billbody" className='bill-body'/>
                        <img src={BillEye} alt="billeye" className='bill-eye' onClick={clicked}/>
                    </div>
                ) : (

                    <div className='static-element'>
                        {/* Статичный элемент, который появится после GIF */}
                        <img src={BillBody} alt="billbody" className='bill-body' style={{filter: 'blur(7px)'}}/>
                        <img src={BillEye} alt="billeye" className='bill-eye' onClick={clicked}
                             style={{filter: 'blur(7px)'}}/>
                        <div className={`input-wrapper ${shake ? 'shake' : ''}`}>
                            <input className="input-field"
                                   type='text'
                                   value={isEntered}
                                   onChange={handleChange}
                                   onKeyDown={handleKeyPress}/>
                        </div>
                    </div>
                )
            )}

        </div>
    )
        ;
};

export default BillEyeComponent;
