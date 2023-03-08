import React from "react";

function SelectPlan() {
    return(
        <div>
            <h1 className="heading">Select your plan</h1>
            <p className="description">You have the option of monthly or yearly billing.</p>
            <div className="plan-container">
                <div>
                    <img src="./src/assets/images/icon-advanced.svg" alt="" />
                    <p className="option">Arcade</p>
                    <p className="price">$90/yr</p>
                    <p className="discount">2 months free</p>
                </div>
                <div>
                    <img src="./src/assets/images/icon-arcade.svg" alt="" />
                    <p className="option">Advanced</p>
                    <p className="price">$120/yr</p>
                    <p className="discount">2 months free</p>
                </div>
                <div>
                    <img src="./src/assets/images/icon-pro.svg" alt="" />
                    <p className="option">Pro</p>
                    <p className="price">$150/yr</p>
                    <p className="discount">2 months free</p>
                </div>
            </div>
            <div className="plan-type">
                <span className="monthly">Monthly</span>
                <div className="button clicked">
                    <div className="switch"></div>
                </div>
                <span className="yearly">Yearly</span>
            </div>
        </div>
    )
}

export default SelectPlan