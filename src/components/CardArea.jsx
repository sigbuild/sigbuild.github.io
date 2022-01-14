import React from "react";
import SimpleSignature from "./simpleSignature";
import FullSignature from "./fullSignature";
import {Card, Button, Grid} from "@mui/material";
import ClipboardJS from "clipboard";
import {useSelector} from "react-redux";

export default function CardArea (){
    new ClipboardJS('.clipboard');
    const state = useSelector(state => state);    
    
    return (
    <Grid className="card-area">
        <Card>
            <Button data-clipboard-target=".simple-signature" className="clipboard">
                Copy
            </Button>
            <SimpleSignature data={state}/> 
        </Card>
        <Card sx={{mt:2}}>
            <Button data-clipboard-target=".full-signature" className="clipboard">
                Copy
            </Button>
            <FullSignature data={state} />
        </Card>
    </Grid>
    );
};