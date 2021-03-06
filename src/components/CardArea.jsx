import React from "react";
import { useSelector } from "react-redux";
import ClipboardJS from "clipboard";
import SimpleSignature from "./SimpleSignature";
import FullSignature from "./FullSignature";
import {Card, Button, Grid} from "@mui/material";
import '../css/components.css';

export default function CardArea (){
    new ClipboardJS('.clipboard');
    const data = useSelector(data => data);

    return (
    <Grid className="card-area">
        <Card>
            <Button data-clipboard-target=".simple-signature" className="clipboard">
                Copy
            </Button>
            <SimpleSignature data={data} /> 
        </Card>
        <Card sx={{mt:2}}>
            <Button data-clipboard-target=".full-signature" className="clipboard">
                Copy
            </Button>
            <FullSignature data={data}/>
        </Card>
    </Grid>
    );
};