import React from "react";

export default function Signature (props){
    let [type, image, name, credentials, pronouns, title, college, department, address, location, phone, email] = props.data;
    let details = [title, college, department, address, location, phone];
    return ( 
    <div>
        {type==="simple" ? 
        <p className="signature">
            <img className="sigImage" src={image} alt="college-img" nosend="1" />
            <br />
            <br />
            <span className="name">{name} 
                {credentials && <span>, {credentials} </span>}
            </span>
            <br />
            {details.map((detail, index)=>(
                <span key={"detail"+index}>
                {detail} 
                {detail && <br /> }
                </span>))}
            {email && <a href={"mailto:"+email} className="email">
                {email}
            </a> }
        </p>
        : <table className="signature">
            <tbody>
                <tr>
                    <td>
                        <img className="sigImage" src={image} alt="college-img" nosend="1" />
                    </td>
                    <td>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="name">{name} 
                                            {credentials && <span>, {credentials}</span>}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {pronouns && <i className="pronouns">{pronouns}</i>}
                                    </td>
                                </tr>
                                {details.map((detail, index)=>(
                                    <tr key={"td"+index}>
                                        <td>
                                            <span>
                                                {detail} 
                                                {detail && <br /> }
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
        </table>}
    </div> 
    );
}