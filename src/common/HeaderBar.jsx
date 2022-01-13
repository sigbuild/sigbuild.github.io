import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

export default function HeaderBar (props){

    return (
    <Box>
        <CssBaseline />
        <AppBar position={props.size==="mobile"?"absolute":"fixed"} style={{zIndex: 1200, backgroundColor:"#005A8B" }}>
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