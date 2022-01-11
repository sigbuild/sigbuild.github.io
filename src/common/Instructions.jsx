import React from "react";
import { Box, Divider, Typography, Drawer, Button } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

export default function Instructions(props) {
    function close(){
        props.close();
    }

    return (
    <Drawer anchor="right" open={props.opened} 
        onClose={close} BackdropProps={{ invisible: true }}>
        <Button onClick={close}>
            <CloseRounded style={{color:"#A9A9A9"}} fontSize="large" />
        </Button>
        <Box role="presentation">
            <Typography variant="h4">
                Instructions for Outlook
            </Typography>
            <Divider />
            <Typography paragraph>
                These are instructions. 
            </Typography>
        </Box> 
    </Drawer>
    );
};
