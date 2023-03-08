import React from "react";

function Navgation(props) {
    return(
        <div className="navigation">
            {props.currentStep > 1 && <button onClick={props.goBack} className='go-back-btn'>Go Back</button>}
            {props.currentStep === 1 && <button className="invisible"></button>}
            {props.currentStep < 4 && <button onClick={props.next} className='next-btn'>Next Step</button>}
            {props.currentStep === 4 && <button onClick={props.next} className='confirm-btn'>Confirm</button>}
        </div>
    )
}

export default Navgation