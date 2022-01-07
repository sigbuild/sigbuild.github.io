import React, {useState} from "react";

export default function Input (props){
    const [input, setInput] = useState("");

    function handleChange(event){
        setInput(event.target.value);
        props.onUpdate(event.target.value);
    };

    return (
    <div>
    {props.label==="image"?
        <div>
            <label>Select image: </label>
            <select name={props.label} onChange={event => handleChange(event)}>
                <option value="primary_rgb.png">Primary Blue</option>
                <option value="primary_black.png">Primary Black</option>
                <option value="primary_white.png">Primary White</option>
                <option value="secondary_blue.png">Secondary Blue</option>
                <option value="secondary_black.png">Secondary Black</option>
                <option value="secondary_white.png">Secondary White</option>
                <option value="horizontal_rgb.png">Horizontal Blue</option>
                <option value="horizontal_black.png">Horizontal Black</option>
                <option value="horizontal_white.png">Horizontal White</option>
                <option value="ribbon.png">Ribbon</option>
                <option value="initials.png">BC Initials</option>
            </select> 
        </div> 
        : 
        <div>
            <label style={{textTransform: 'capitalize'}}>{props.label}</label>
            <input name={props.label} onChange={event=>handleChange(event)} value={input} type="text" placeholder={props.example} />
        </div>
    }
    </div>
    );
};