import React from "react";
import SimpleSignature from "./signatures/simpleSignature";
import FullSignature from "./signatures/fullSignature";
import { Box, Card, Button } from "@material-ui/core";

export default function Table (props){
    return (
        <Box className="table">
            <Card>
                <Button data-clipboard-target=".simple-signature" className="clipboard">
                    Copy
                </Button>
                <SimpleSignature data={props.data}/> 
            </Card>
            <Card>
                <Button data-clipboard-target=".full-signature" className="clipboard">
                    Copy
                </Button>
                <FullSignature data={props.data} />
            </Card>
        </Box>
    );
};