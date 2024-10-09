import "../styles/tapestry-page.css"
import Bill from "../images/arts-drafts/2page/billcipger.png";

import React, {useState} from "react";
import TapestryFrame from "./TapestryFrame";


const TapestryPage = () => {
    const [isTapestryOpen, setTapestryOpen] = useState(false);

    const toggleTapestry = () => {
        setTapestryOpen(!isTapestryOpen);
    }

    return (<>
        <div className="main-tapestry-page">
            <button onClick={toggleTapestry} style={{cursor: 'pointer'}}>THERE WILL BE A PICTURE OF THE FRAME</button>
            <img src={Bill} alt='' className='bill'/>
            <TapestryFrame isOpen={isTapestryOpen} onClose={toggleTapestry} tapestryNumber={1}/>

        </div>
    </>)

}
export default TapestryPage;