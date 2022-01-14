import React from "react";
import { CardContent } from "@mui/material";

export default function simpleSignature (props){
    let nameSize=props.nameSize;
    let detailSize = props.detailSize;
    let lineHeight = props.lineHeight;
    let imageSize = props.imageSize;
    let image = props.image;
    let color = props.color;
    !nameSize ? nameSize = 18 : nameSize *= 4/3;
    !detailSize ? detailSize = 11 : detailSize *= 4/3;
    let details = [props.title, props.college, props.department, props.address, props.location, props.phone];
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
            <span style={{fontSize:nameSize}}>{props.name} 
                {props.credentials && <span>, {props.credentials} </span>}
            </span>
            <br />
            {details.map((detail, index)=>(
                detail && <span key={"detail"+index}>{detail} <br /> </span>
            ))}
            {props.email && <a href={"mailto:"+props.email} className="email" style={{color: color}}>
                {props.email}
            </a> }
        </p>
    </CardContent>
    );
};