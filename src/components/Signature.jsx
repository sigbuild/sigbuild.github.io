import React from "react";

export default (props)=>{
    return (
    <div>
        <p className="signature">
            <img className="sigImage"
            src={props.image} 
            nosend="1" />
            <br />
            <br />
            <span style="font-size: 1.6em">{props.name}, {props.credentials}</span>
            <br />
            {props.title}
            <br />
            {props.college}
            <br />
            {props.department}
            <br />
            {props.address}
            <br />
            {props.location}
            <br />
            {props.phone}
            <br />
            <a href={"mailto:"+props.email} className="email">
                zacharyneill@gmail.com
            </a>
        </p>
    </div>
    );
}