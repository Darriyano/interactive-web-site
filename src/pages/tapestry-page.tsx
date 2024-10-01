import "../styles/tapestry-page.css"
import Bill from "../images/arts-drafts/2page/billcipger.png";
import TP from "../images/arts-drafts/2page/hahahasillycarpet.png";

import React, {useState} from "react";


const TapestryPage = () => {
    const [tapestry, setClicked] = useState<string>("");

    const setClickedTapestry = (value: string) => {
        setClicked(value);
    }

    return (
        <div className="main-tapestry-page">
            {
                !tapestry ? (
                        <img src={TP} className='tapestry' alt="" onClick={() => setClickedTapestry("1")}/>)
                    :
                    <div></div>
            }
            <img src={Bill} alt='' className='bill'/>
        </div>)

}
export default TapestryPage;