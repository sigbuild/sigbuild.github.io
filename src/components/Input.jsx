import React, {useState} from "react";

export default function Input (props){
    const [input, setInput] = useState("");
    function handleChange(event){
        setInput(event.target.value);
        props.onUpdate(event.target.value);
    };

    return (
    <div>
        <label style={{textTransform: 'capitalize'}}>{props.label}</label>
        <input name={props.label} onChange={event=>handleChange(event)} 
        value={input} type="text" placeholder={props.example} />
    </div>
    );
};