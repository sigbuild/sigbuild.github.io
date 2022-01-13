import React, {useState} from "react";
import Topbar from "./Topbar";
import Instructions from "./Instructions";
import { Button, Box, CssBaseline, Divider, Drawer, Toolbar, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function LargeSidebar() {
  const [opened, setOpened] = useState(false);
    function toggleDrawer(){
      setOpened(true);
    }
    function handleClose(){
      setOpened(false);
    }

    return (
      <Box>
      <Topbar size="large" />
      <Instructions view="large" close={handleClose} opened={opened} />
      <CssBaseline />
      <Box sx={{ display: "flex"}}>
        <Drawer sx={{boxSizing: 'border-box'}} style={{zIndex: 1100}}
          variant="permanent"
          anchor="left">
            <Toolbar />
            <Box className="sidebar-typography">
              <Typography className="main-title" variant="h3" style={{textAlign:"center", fontFamily: 'League Spartan', fontWeight:600}}>
              Signature Builder
              </Typography>
              <Divider style={{marginTop:10}} />
              <Divider style={{marginBottom:20}} />

              <Typography paragraph>
                Build a professional signature to include at the end of your emails! 
              </Typography>
              <Divider style={{marginTop:10}} />
              <Divider style={{marginBottom:20}} />
              <Typography paragraph>
                Click <Button variant="outlined" style={{color:"#005A8B"}} size="small" onClick={toggleDrawer}>here</Button> for instructions 
                for Outlook and Gmail. 
              </Typography>
            </Box>
            <Box className="sidebar-buttons" style={{color:"#005A8B"}}>
              <Button href="https://my.berea.edu" target="_blank">Go to myBerea</Button>
              <Button href="https://moodle.berea.edu" target="_blank">Go to Moodle</Button>
              <Button href="https://github.com/zachneill/signature-builder" target="_blank">Go to Source Code</Button>
            </Box>
        </Drawer> 
      </Box>
    </Box>
  );
}; 

export function MediumSidebar() {
  const [opened, setOpened] = useState(false);
    function toggleDrawer(){
      setOpened(true);
    }
    function handleClose(){
      setOpened(false);
    }
  
    return (
      <Box>
      <Topbar size="medium" />
      <Instructions view="medium" close={handleClose} opened={opened} />
      <CssBaseline />
        <Box sx={{ display: "flex"}} style={{flexWrap:"wrap"}}>
        <Drawer sx={{overflow:"auto", boxSizing: 'border-box'}} style={{zIndex: 1100}}
          variant="permanent"
          anchor="left">
            <Toolbar />
            <Box style={{width:85}}/>
            <Box className="sidebar-mobile">
              <Button onClick={toggleDrawer}>How-To</Button>
              <Button href="https://my.berea.edu" target="_blank">myBerea</Button>
              <Button href="https://moodle.berea.edu" target="_blank">Moodle</Button>
              <Button href="https://github.com/zachneill/signature-builder" target="_blank" color="inherit"><GitHub /></Button>
            </Box>
          </Drawer> 
        </Box>
      </Box>
    );
  };

export function MobileSidebar() {
  const [opened, setOpened] = useState(false);
    function toggleDrawer(){
      setOpened(!opened);
    }
    function handleClose(){
      setOpened(false);
    }
    return (
      <Box>
      <Instructions view="mobile" close={handleClose} opened={opened} />
      <Topbar size="mobile" /> 
      <BottomNavigation sx={{ zIndex:1600, backgroundColor: "#BFDBEC90", position: 'fixed', height:45, bottom: 0, left: 0, right: 0 }}>
        <BottomNavigationAction style={{fontSize:16}} onClick={toggleDrawer} icon="How-To" />
        <BottomNavigationAction href="https://my.berea.edu" target="_blank" icon="myBerea" />
        <BottomNavigationAction href="https://moodle.berea.edu" target="_blank" icon="Moodle" />
        <BottomNavigationAction href="https://github.com/zachneill/signature-builder" target="_blank" color="inherit" icon={<GitHub />}/>
      </BottomNavigation>
    </Box>
  );
};