import React from "react";
import { CardContent } from "@mui/material";

export default function SimpleSignature (props){
    let {image, name, credentials, title, college, department, address, 
        location, phone, email, color, nameSize, detailSize, imageSize, lineHeight} = props.data;
    
    if (!nameSize){
        nameSize = 18*4/3;
    } else {
        nameSize *= 4/3;
    };
    if (!detailSize){
        detailSize = 18*4/3;
    } else {
        detailSize *= 4/3;
    };

    return ( 
    <CardContent className="simple-signature">
        <p className="signature" style={{color: color, fontSize:detailSize, lineHeight:lineHeight}}>
            <img className="image" style={{maxInlineSize:imageSize}}
                src={"https://raw.githubusercontent.com/zachneill/signature-builder/development/public/images/signatures/"+image} 
                alt="college-img" nosend="1" />
            <br />
            <span style={{fontSize:nameSize}}>{name} 
                {credentials && <span>, {credentials} </span>}
            </span>
            <br />
            {[title, college, department, address, location, phone].map((detail, index)=>(
                detail && <span key={"detail"+index}>{detail} <br /> </span>
            ))}
            {email && <a href={"mailto:"+email} className="email" style={{color: color}}>
                {email}
            </a> }
        </p>
    </CardContent>
    );
};