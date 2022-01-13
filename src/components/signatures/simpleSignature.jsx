import React from "react";
import { CardContent } from "@mui/material";

export default function simpleSignature (props){
    let [image, name, credentials, , title, college, department, address, 
        location, phone, email, color, nameSize, detailSize, imageSize, lineHeight] = props.data;
    let details = [title, college, department, address, location, phone];
    !nameSize ? nameSize = 18 : nameSize *= 4/3;
    !detailSize ? detailSize = 11 : detailSize *= 4/3;
    if (!lineHeight){
        lineHeight = 1.15;
    };
    if (!imageSize){
        imageSize = 110;
    };
    if (!image){
        image="primary_rgb.png";
    };
    if (!color){
        color="#005A8B";
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