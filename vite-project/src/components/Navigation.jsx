import React from "react";

function Navgation(props) {
    return(
        <div className="navigation">
            {props.currentStep > 1 && <button onClick={props.goBack}>Go Back</button>}
            {props.currentStep === 1 && <button className="invisible"></button>}
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Navgation