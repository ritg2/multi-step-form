import React from "react";

function YourInfo(props) {
    let style2 = {display: 'none'}
    return(
        <div>
            <h1 className="heading">Personal info</h1>
            <p className="description">Please provide your name, email and phone number.</p>
            <div className="form">
                <label htmlFor="name">Name</label>
                <span style={props.formInfo.name === '' ? props.style : style2}>This field is required</span>
                <br />
                <input 
                    type="text" 
                    placeholder="e.g. Stephen King" 
                    id="name" 
                    value={props.formInfo.name}
                    onChange={(e)=>props.onchange(e)}
                />
                <br />
                <label htmlFor="email">Email Address</label>
                <span style={props.formInfo.email === '' ? props.style : style2}>This field is required</span>
                <br />
                <input 
                    type="email" 
                    placeholder="e.g. stephenking@lorem.com" 
                    id="email"
                    value={props.formInfo.email}
                    onChange={(e)=>props.onchange(e)}
                />
                <br />
                <label htmlFor="phone">Phone number</label>
                <span style={props.formInfo.phone === '' ? props.style : style2}>This field is required</span>
                <br />
                <input 
                    type="tel" 
                    placeholder="e.g. +234567890" 
                    id="phone"
                    value={props.formInfo.phone}
                    onChange={(e)=>props.onchange(e)}
                />
                <br />
            </div>
        </div>
    )
}

export default YourInfo