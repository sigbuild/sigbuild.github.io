import React from "react";

export default function Signature (props){
    let [type, image, name, credentials, title, college, department, address, location, phone, email] = props.data;
    let details = [title, college, department, address, location, phone]
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
        : <p>
            Full
        </p>}
    </div> 
    );
}