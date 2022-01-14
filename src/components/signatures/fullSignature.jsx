import React from "react";
import { CardContent } from "@mui/material";

export default function FullSignature (props){
    let [image, name, credentials, pronouns, title, college, department, address, 
        location, phone, email, color, nameSize, detailSize, imageSize, lineHeight] = props.data;
    let details = [title, college, department, address, location, phone];
    let needsPadding = false;
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

    switch(image) {
        case "ribbon.png":
            needsPadding = true;
            break;
        case "isns_blue.png":
            needsPadding = true;
            break;
        case "isns_black.png":
            needsPadding = true;
            break;
        case "isns_white.png":
            needsPadding = true;
            break;
        default:
            needsPadding = false;
            break;
    };

    return ( 
        <CardContent className="full-signature" style={{fontSize: detailSize, lineHeight: lineHeight}}>
            <table className="signature">
                <tbody>
                    <tr style={{color: color}}>
                        <td className="top">
                            <img className={needsPadding ? "image border-padding": "image"} style={{maxInlineSize: imageSize}}
                            src={"https://raw.githubusercontent.com/zachneill/signature-builder/development/public/images/signatures/"+image} alt="college-img" nosend="1" />
                        </td>
                        <td className="border">
                            <table>
                                <tbody style={{ color: {color} }}>
                                    <tr>
                                        <td>
                                            <span style={{fontSize:nameSize}}>{name} 
                                                {credentials && <span>, {credentials}</span>}
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="pronouns">
                                        <td>
                                            {pronouns && <i>{pronouns}</i>}
                                        </td>
                                    </tr>
                                    {details.map((detail, index)=>(
                                        detail && 
                                        <tr className="top" key={"tr"+index}>
                                            <td>
                                                <span>
                                                    {detail} 
                                                    <br />
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="email">
                                        <td>
                                            {email && <a href={"mailto:"+email} className="email" style={{color: color}}>
                                            {email}
                                            </a> }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardContent>
    );
};