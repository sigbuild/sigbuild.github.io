import React from "react";

export default function SimpleSignature (props){
    let [image, name, credentials, pronouns, title, college, department, address, location, phone, email] = props.data;
    let details = [title, college, department, address, location, phone];
    return ( 
    <div>
        <table className="signature table">
            <tbody>
                <tr>
                    <td className="top">
                        <img className={image==="/images/ribbon.png" ? "image ribbon": "image"} src={image} alt="college-img" nosend="1" />
                    </td>
                    <td className="border">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="name">{name} 
                                            {credentials && <span>, {credentials}</span>}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="pronouns">
                                    <td>
                                        {pronouns && <i>{pronouns}</i>}
                                    </td>
                                </tr>
                                {details.map((detail)=>(
                                    detail && 
                                    <tr className="top" key={"td"+detail}>
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
                                        {email && <a href={"mailto:"+email} className="email">
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
    </div> 
    );
}