import React from "react";

function Addon() {
    return(
        <div>
            <h2>Pick add-ons</h2>
            <p>Addons help improve gamming expeience.</p>
            <div>
                <div>
                    <input type='checkbox'/>
                    <span>
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </span>
                    <p>+$1/mo</p>
                </div>
                <div>
                    <input type='checkbox'/>
                    <span>
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </span>
                    <p>+$2/mo</p>
                </div>
                <div>
                    <input type='checkbox'/>
                    <span>
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </span>
                    <p>+$2/mo</p>
                </div>
            </div>
        </div>
    )
}

export default Addon