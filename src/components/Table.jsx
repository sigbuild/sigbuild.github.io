import React from "react";
import Signature from "./Signature";

export default (props)=>{
    return (
        <div className="table">
            {props.data &&
            <Signature sigType={props.sigType} />
            }
        </div>
    );
};