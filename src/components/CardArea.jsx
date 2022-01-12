import React from "react";
import SimpleSignature from "./signatures/simpleSignature";
import FullSignature from "./signatures/fullSignature";
import {Box, Card, Button} from "@mui/material";
import ClipboardJS from "clipboard";

export default function CardArea (props){
    new ClipboardJS('.clipboard');
    
    return (
        <Box className="card-area">
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