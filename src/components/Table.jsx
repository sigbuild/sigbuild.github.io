import React from "react";
import SimpleSignature from "./signatures/simpleSignature";
import FullSignature from "./signatures/fullSignature";
import { Card } from "@material-ui/core";

export default function Table (props){
    return (
        <div className="table">
            <Card>
                <SimpleSignature data={props.data}/> 
            </Card>
            <Card className="card">
                <FullSignature data={props.data} />
            </Card>
        </div>
    );
};