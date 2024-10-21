import "../styles/toggle-tapestry.css"
import PIC from "../images/arts-drafts/2page/BURNcarpetBURNNNN.png"
import React, {useState} from "react";
import {useTapestry} from "./tapestriesStateHook";
import {tapestryCodes} from "./codes";

interface TapestryFrame {
    isOpen: boolean;
    onClose: () => void;
    tapestryNumber: number;
}

const TapestryFrame: React.FC<TapestryFrame> = ({isOpen, onClose, tapestryNumber}) => {
    const [shake, setShake] = useState<boolean>(false);  // State to control shake animation
    const [isEntered, setEntered] = useState<string>(""); // State to control input

    const {statesDict, setTapState} = useTapestry();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEntered(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (tapestryCodes[tapestryNumber].includes(isEntered.toLowerCase())) {
                setTapState(prevState => ({
                    states: prevState.states.map((state, index) =>
                        index === tapestryNumber && !state ? true : state
                    )
                }));

                setEntered('');
                onClose()
                return;
            } else {
                setShake(true);  // Trigger shake animation
                setTimeout(() => setShake(false), 500);  // Remove the shake class after animation
            }
            setEntered('');
        }
    };

    if (!isOpen) {
        return null;
    } // Если окно закрыто, ничего не рендерим

    return (<div className="modal-overlay">
        <img src={PIC} alt={""} onClick={onClose} className="tapestry-img"/>
        <div className={`input-wrapper ${shake ? 'shake' : ''}`}>
            <input
                type='text'
                value={isEntered}
                onChange={handleChange}
                onKeyDown={handleKeyPress}/>
        </div>
    </div>)
}

export default TapestryFrame;