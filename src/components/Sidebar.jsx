import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function PermanentDrawerLeft() {
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{zIndex: 1200, backgroundColor:"#005A8B" }}
          sx={{ width: 280}}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {/* Title here if needed */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer style={{zIndex: 1100}}
          sx={{ 
            width: 280,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 280,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 2 }}>
        </Box>
      </Box>
    );
  }