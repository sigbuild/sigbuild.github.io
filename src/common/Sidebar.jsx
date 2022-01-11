import React, {useState} from "react";
import { Button, Box, CssBaseline, Divider, Drawer, Toolbar, Typography } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import Instructions from "./Instructions";

export default function Sidebar(props) {
  const [opened, setOpened] = useState(false);
    function toggleDrawer(){
      setOpened(true);
    }
    function handleClose(){
      setOpened(false);
    }

    return (
      <Box>
      <Instructions close={handleClose} opened={opened} />
      <CssBaseline />
      {props.size==="larger" ? 
        <Box sx={{ display: "flex"}}>
        <Drawer sx={{boxSizing: 'border-box'}} style={{zIndex: 1100}}
          variant="permanent"
          anchor="left">
            <Toolbar />
            <Box className="sidebar-typography">
              <Typography variant="h4" style={{textAlign:"center", fontWeight:600}}>
              Signature Builder
              </Typography>
              <Divider style={{marginTop:10}} />
              <Divider style={{marginBottom:10}} />

              <Typography paragraph>
                Build a professional signature to include at the end of your emails! 
              </Typography>
              <Divider style={{marginTop:10}} />
              <Divider style={{marginBottom:20}} />
              <Typography paragraph>
                Click <Button onClick={toggleDrawer}>here</Button> for instructions 
                for Outlook and Gmail. 
              </Typography>
            </Box>
            <Box className="sidebar-buttons">
              <Button href="https://my.berea.edu" target="_blank">Go to myBerea</Button>
              <Button href="https://moodle.berea.edu" target="_blank">Go to Moodle</Button>
              <Button href="https://github.com/zachneill/signature-builder" target="_blank">Go to Source Code</Button>
            </Box>
        </Drawer> 
      </Box>
    : 
      <Box>
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
    }
    </Box>
  );
}