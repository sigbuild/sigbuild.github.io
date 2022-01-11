import React from "react";
import { Box, Divider, Typography, Drawer, Button, List, ListItem } from "@material-ui/core";
import { CloseRounded, LooksOne, LooksTwo, Looks3, Looks4, MoreHoriz, Looks5 } from "@material-ui/icons";

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
                <ListItem> <LooksOne fontSize="large" />
                    Open Settings (gear icon)
                </ListItem>
                <ListItem> <LooksTwo fontSize="large" />
                    Search <span style={{fontWeight: 'bold', margin:4}}>"signature"</span> and paste your signature into the field 
                </ListItem>
                <ListItem> <Looks3 fontSize="large" />
                    You may set it to be visible by default. Hit save
                </ListItem>
                <ListItem> <Looks4 fontSize="large" />
                    If not default, on emails, click the <MoreHoriz /> dots and 
                    <span style={{fontWeight: 'bold', marginLeft:4}}>Insert signature</span>
                </ListItem>
            </List>
            <Typography variant="h5" style={{textAlign: "center"}}>
                Instructions for Gmail
            </Typography>
            <Divider />
            <List>
                <ListItem> <LooksOne fontSize="large" />
                Open Settings (gear icon)
                </ListItem>
                <ListItem> <LooksTwo fontSize="large" />
                    Select "See all settings" and scroll to <span style={{fontWeight: 'bold', marginLeft:4}}>Signature</span>
                </ListItem>
                <ListItem> <Looks3 fontSize="large" />
                    Paste your new signature into the text field
                </ListItem>
                <ListItem> <Looks4 fontSize="large" />
                    You may set it to be visible by default. Hit <span style={{fontWeight: 'bold', marginLeft:4}}>Save Changes</span>
                </ListItem>
                <ListItem> <Looks5 fontSize="large" />
                    If not default, on emails, click the <img src="/images/ink_pen_black_20dp.png" alt="ink-pen-black" /> 
                    pen and <span style={{fontWeight: 'bold', marginLeft:4}}>Insert signature</span>
                </ListItem>
            </List>
        </Box> 
    </Drawer>
    );
};
