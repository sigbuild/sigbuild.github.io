import React from "react";
import SimpleSignature from "./signatures/simpleSignature";
import FullSignature from "./signatures/fullSignature";
import { Box, Card } from "@material-ui/core";

export default function Table (props){
    return (
        <Box className="table">
            <Card>
                <SimpleSignature data={props.data}/> 
            </Card>
            <Card>
                <FullSignature data={props.data} />
            </Card>
        </Box>
    );
};