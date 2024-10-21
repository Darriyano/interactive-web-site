import "../styles/tapestry-page.css"
import Bill from "../images/arts-drafts/2page/billcipger.png";

import React, {useEffect, useState} from "react";
import TapestryFrame from "./TapestryFrame";
import {useTapestry} from "./tapestriesStateHook";
import {useNavigate} from "react-router";


const TapestryPage = () => {
    const navigate = useNavigate();

    // Here we will act with array tapestry states
    const {statesDict, setTapState} = useTapestry();
    const [currNum, setcurrNum] = useState<number>(0);

    const [isTapestryOpen, setTapestryOpen] = useState(false);

    const toggleTapestry = (tapNum: number): void => {
        if (!statesDict.states[tapNum]) {
            setcurrNum(tapNum)
            setTapestryOpen(!isTapestryOpen);
        }
    }

    useEffect(() => {
        if (!statesDict.states.includes(false)) {
            // navigate("/")
        }
    }, [])

    return (<>
        <div className="main-tapestry-page">
            {/*{Here will be not button, but image - clickable/not, it will place some number}*/}
            <div className="tap-location">
                <div>
                    <button onClick={() => toggleTapestry(0)} style={{cursor: 'pointer'}}>AAAA1
                    </button>
                </div>
                <div>
                    <button onClick={() => toggleTapestry(1)} style={{cursor: 'pointer'}}>AAAA2
                    </button>
                </div>

            </div>
            <img src={Bill} alt='' className='bill'/>
            <TapestryFrame isOpen={isTapestryOpen} onClose={() => toggleTapestry(currNum)} tapestryNumber={currNum}/>
        </div>
    </>)

}
export default TapestryPage;