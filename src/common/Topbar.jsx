import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
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
        <Box component="main" sx={{ p: 2 }}></Box>
    </Box>
    )
}