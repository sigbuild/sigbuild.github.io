import React from "react";
import Signature from "./Signature";

export default function Table (props){
    return (
        <div className="table">
            {props.data.length &&
            <Signature data={props.data} />
            }
        </div>
    );
};