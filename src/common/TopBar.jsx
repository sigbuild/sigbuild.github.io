import React from "react";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@material-ui/core";

export default function TopBar (){
    return (
    <Box>
        <CssBaseline />
        <AppBar style={{zIndex: 1200, backgroundColor:"#005A8B" }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                {/* Title here if needed */}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 2 }}></Box>
    </Box>
    )
}