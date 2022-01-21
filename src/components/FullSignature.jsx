import React from "react";
import { CardContent } from "@mui/material";
import '../css/components.css';

export default function FullSignature (props){
    let {image, name, credentials, pronouns, title, college, department, address, 
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
    <CardContent className="full-signature" style={{fontSize: detailSize, lineHeight: lineHeight}}>
        <table className="signature">
            <tbody>
                <tr style={{color: color}}>
                    <td className="top">
                        <img className="image" style={{maxInlineSize: imageSize}}
                            src={"https://raw.githubusercontent.com/zachneill/signature-builder/development/public/images/signatures/"+image} 
                            alt="college-img" nosend="1" />
                    </td>
                    <td className="border">
                        <table>
                            <tbody style={{ color: {color} }}>
                                {(name||credentials) && <tr>
                                    <td>
                                        <span style={{fontSize:nameSize}}>{name && <span>{name}</span>} 
                                            {credentials && <span>, {credentials}</span>}
                                        </span>
                                    </td>
                                </tr>}
                                {pronouns&&<tr className="pronouns">
                                    <td>
                                        {<i>{pronouns}</i>}
                                    </td>
                                </tr>}
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
                                {email && <tr className="email">
                                    <td>
                                        <a href={"mailto:"+email} className="email" style={{color: color}}>
                                        {email}
                                        </a> 
                                    </td>
                                </tr>}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </CardContent>
    );
};