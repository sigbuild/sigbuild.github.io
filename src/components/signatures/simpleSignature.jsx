import React from "react";

export default function simpleSignature (props){
    let [image, name, credentials, , title, college, department, address, location, phone, email, color] = props.data;
    let details = [title, college, department, address, location, phone];
    return ( 
    <div>
        <p className="signature" style={{color: color}}>
            <img className="image" src={image} alt="college-img" nosend="1" />
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
    </div> 
    );
}