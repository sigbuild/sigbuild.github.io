import React from "react";
import SimpleSignature from "./SimpleSignature";
import FullSignature from "./FullSignature";
import {Card, Button, Grid} from "@mui/material";
import ClipboardJS from "clipboard";

export default function CardArea (){
    new ClipboardJS('.clipboard');

    return (
    <Grid className="card-area">
        <Card>
            <Button data-clipboard-target=".simple-signature" className="clipboard">
                Copy
            </Button>
            <SimpleSignature /> 
        </Card>
        <Card sx={{mt:2}}>
            <Button data-clipboard-target=".full-signature" className="clipboard">
                Copy
            </Button>
            <FullSignature />
        </Card>
    </Grid>
    );
};