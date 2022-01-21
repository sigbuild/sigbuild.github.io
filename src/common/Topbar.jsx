import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography, Box } from "@mui/material";
import '../css/common.css';

export default function Topbar (props){

    return (
    <Box>
        <CssBaseline />
        <AppBar position={props.size==="mobile"?"absolute":"fixed"} className="topbar">
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {props.size!=="large" ? "Signature Builder" : null}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box className="pb-20" component="main"></Box>
    </Box>
    )
}