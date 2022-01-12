import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";

export default function TopBar (props){
    
    return (
    <Box>
        <CssBaseline />
        <AppBar position="fixed" style={{zIndex: 1200, backgroundColor:"#005A8B" }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                {props.size==="smaller"? "BC Signature Builder" : null}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 2 }}></Box>
    </Box>
    )
}