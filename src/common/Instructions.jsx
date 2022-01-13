import React from "react";
import { Box, Divider, Typography, Drawer, Button, List, ListItem } from "@mui/material";
import { CloseRounded, LooksOne, LooksTwo, Looks3, Looks4, MoreHoriz, Looks5 } from "@mui/icons-material";

export default function Instructions(props) {
    function close(){
        props.close();
    }

    return (
    <Drawer anchor="right" open={props.opened} onClose={close} BackdropProps={{ invisible: true }}>
        <Button onClick={close} style={{justifyContent: "flex-start"}}>
            <CloseRounded style={{color:"#A9A9A9"}} fontSize="large" />
        </Button>
        <Box role="presentation">
            <Typography variant="h5" style={{textAlign: "center"}}>
                Instructions for Outlook (Browser)
            </Typography>
            <Divider />
            <List>
                <ListItem> <LooksOne fontSize="large" /><span>Open Settings (gear icon)</span>
                    
                </ListItem>
                <ListItem> <LooksTwo fontSize="large" /><span>Search "signature" and paste your signature into the field </span>
                    
                </ListItem>
                <ListItem> <Looks3 fontSize="large" /><span>You may set it to be visible by default. Hit save</span>
                    
                </ListItem>
                <ListItem> <Looks4 fontSize="large" /><span>If not default, on emails, click the <MoreHoriz style={{verticalAlign:"middle", display:"inline"}}/> dots and 
                    Insert signature</span>
                    
                </ListItem>
            </List>
            <Typography variant="h5" style={{textAlign: "center"}}>
                Instructions for Gmail
            </Typography>
            <Divider />
            <List>
                <ListItem> <LooksOne fontSize="large" />
                    <span>Open Settings (gear icon)</span>
                </ListItem>
                <ListItem> <LooksTwo fontSize="large" />
                    <span>Select "See all settings" and scroll to Signature</span>
                </ListItem>
                <ListItem> <Looks3 fontSize="large" />
                    <span>Paste your new signature into the text field</span>
                </ListItem>
                <ListItem> <Looks4 fontSize="large" />
                    <span>You may set it to be visible by default. Hit Save Changes</span>
                </ListItem>
                <ListItem> <Looks5 fontSize="large" />
                    <span>If not default, on emails, click the 
                    <img src="/images/gmail_pen.png" alt="ink-pen-black" style={{verticalAlign:"middle", display:"inline"}}/> 
                    pen and Insert signature</span>
                </ListItem>
            </List>
            {props.view==="mobile" && <Box style={{height:40}} />}
        </Box>
    </Drawer>
    );
};
