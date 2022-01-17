import React, {useState} from "react";
import Topbar from "./Topbar";
import Instructions from "./Instructions";
import { Button, Divider, Box, CssBaseline, Drawer, Toolbar, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function LargeSidebar() {
  const [opened, setOpened] = useState(false);
    function toggleDrawer(){
      setOpened(true);
    };
    function handleClose(){
      setOpened(false);
    };

    return (
    <Box>
      <Topbar size="large" />
      <Instructions view="large" close={handleClose} opened={opened} />
      <CssBaseline />
      <Box sx={{ display: "flex"}}>
        <Drawer className="sidebar-drawer"
          variant="permanent"
          anchor="left">
          <Toolbar />
          <Box className="sidebar-box">
            <Typography className="main-title" variant="h3">
              Signature Builder
            </Typography>
            <Divider className="mt-10" />
            <Divider className="mb-20" />
            <Typography paragraph>
              Build a professional signature to include at the end of your emails! 
            </Typography>
            <Divider className="mt-10" />
            <Divider className="mb-20" />
            <Typography paragraph>
              Click <Button variant="outlined" className="berea-blue" size="small" onClick={toggleDrawer}>here</Button> for instructions 
              for Outlook and Gmail. 
            </Typography>
          </Box>
          <Box className="sidebar-buttons berea-blue centered">
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
        <Box sx={{ display: "flex"}} >
        <Drawer className="sidebar-drawer"
          variant="permanent"
          anchor="left">
          <Toolbar />
          <Box sx={{width:85}}/>
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
  };
  function handleClose(){
    setOpened(false);
  };

  return (
  <Box>
    <Instructions view="mobile" close={handleClose} opened={opened} />
    <Topbar size="mobile" /> 
    <BottomNavigation className="bottom-bar-mobile">
      <BottomNavigationAction style={{fontSize:16}} onClick={toggleDrawer} icon="How-To" />
      <BottomNavigationAction href="https://my.berea.edu" target="_blank" icon="myBerea" />
      <BottomNavigationAction href="https://moodle.berea.edu" target="_blank" icon="Moodle" />
      <BottomNavigationAction href="https://github.com/zachneill/signature-builder" target="_blank" color="inherit" icon={<GitHub />}/>
    </BottomNavigation>
  </Box>
  );
};