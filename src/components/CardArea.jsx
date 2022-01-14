import React from "react";
import SimpleSignature from "./simpleSignature";
import FullSignature from "./fullSignature";
import {Card, Button, Grid} from "@mui/material";
import ClipboardJS from "clipboard";

export default function CardArea (props){
    new ClipboardJS('.clipboard');
    
    return (
    <Grid className="card-area">
        <Card>
            <Button data-clipboard-target=".simple-signature" className="clipboard">
                Copy
            </Button>
            <SimpleSignature data={props.data}/> 
        </Card>
        <Card sx={{mt:2}}>
            <Button data-clipboard-target=".full-signature" className="clipboard">
                Copy
            </Button>
            <FullSignature data={props.data} />
        </Card>
    </Grid>
    );
};