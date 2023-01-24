import React from "react";

function Sidebar(props) { 
    return(
        <div className="side-bar">
            <div className="step">
                <div className={props.currentStep === 1 ? 'number active' : 'number'}>1</div>
                <div className="step-items">
                    <span className="label">STEP 1</span>
                    <span className="stage">YOUR INFO</span>     
                </div>           
            </div>

            <div className="step">
                <div className={props.currentStep === 2 ? 'number active' : 'number'}>2</div>
                <div className="step-items">
                    <span className="label">STEP 2</span>
                    <span className="stage">SELECT PLAN</span> 
                </div>           
            </div>

            <div className="step">
                <div className={props.currentStep === 3 ? 'number active' : 'number'}>3</div>
                <div className="step-items">
                    <span className="label">STEP 3</span>
                    <span className="stage">ADD-ONS</span>  
                </div>          
            </div>

            <div className="step">
                <div className={props.currentStep >= 4 ? 'number active' : 'number'}>4</div>
                <div className="step-items">
                    <span className="label">STEP 4</span>
                    <span className="stage">SUMMARY</span>  
                </div>          
            </div>
        </div>
    )
}

export default Sidebar