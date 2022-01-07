import React from "react";
import SimpleSignature from "./signatures/simpleSignature";
import FullSignature from "./signatures/fullSignature";

export default function Table (props){

    return (
        <div className="table">
            { props.data.length && 
            <div>
                <SimpleSignature data={props.data}/>
                <FullSignature data={props.data} />
            </div>}
        </div>
    );
};