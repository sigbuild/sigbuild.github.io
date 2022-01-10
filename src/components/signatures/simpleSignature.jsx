import { CardContent } from "@material-ui/core";
import React from "react";

export default function simpleSignature (props){
    let [image, name, credentials, , title, college, department, address, location, phone, email, color] = props.data;
    let details = [title, college, department, address, location, phone];
    if (!image){
        image="primary_rgb.png";
    };
    if (!color){
        color="#005A8B";
    };

    return ( 
        <CardContent>
            <p className="signature" style={{color: color}}>
                <img className="image" 
                src={"https://raw.githubusercontent.com/zachneill/signature-builder/main/public/images/"+image} alt="college-img" nosend="1" />
                <br />
                <span className="name">{name} 
                    {credentials && <span>, {credentials} </span>}
                </span>
                <br />
                {details.map((detail, index)=>(
                    detail && <span key={"detail"+index}>{detail} <br /> </span>
                ))}
                {email && <a href={"mailto:"+email} className="email" style={{color: color}}>
                    {email}
                </a> }
            </p>
        </CardContent>
    );
}