import React from "react";
import { Box, CssBaseline, Divider, Drawer, Toolbar, Typography } from "@material-ui/core";

export default function Sidebar() {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);    

    return (
        <Box>
        {width > 1520 ? 

        <Box sx={{ display: "flex"}} style={{flexWrap:"wrap" }} >
        <CssBaseline />
        <Drawer style={{zIndex: 1100}}
          variant="permanent"
          anchor="left">
            <Toolbar />
            <Typography variant="h3">
            Signature
            </Typography>
            <Typography variant="h3">
            Builder
            </Typography>
            <Divider />
        </Drawer> 
      </Box>
        : null}
        
        </Box>
    );
  }