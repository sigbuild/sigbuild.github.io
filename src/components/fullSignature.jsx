import React from "react";
import { CardContent } from "@mui/material";

export default function FullSignature (props){
    let {image, name, credentials, pronouns, title, college, department, address, 
        location, phone, email, color, nameSize, detailSize, imageSize, lineHeight} = props.data;
    let needsPadding = false;
    nameSize *= 4/3;
    detailSize *= 4/3;

    switch(image) {
        case "ribbon.png": needsPadding = true; break;
        case "isns_blue.png": needsPadding = true; break;
        case "isns_black.png": needsPadding = true; break;
        case "isns_white.png": needsPadding = true; break;
        default: needsPadding = false; break;
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
                                {[title, college, department, address, location, phone].map((detail, index)=>(
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