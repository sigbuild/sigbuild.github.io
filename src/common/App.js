import React from "react";
import CardArea from "../components/CardArea";
import Form from "../components/Form";
import LargeSidebar, {MediumSidebar, MobileSidebar} from "./Sidebar";
import IsViewportLarge, {IsViewportMedium, IsViewportMobile} from "./Viewport";
import {Container, Paper, Box} from "@mui/material";
import '../css/main.css'

export default function App() {

  return (
  <Container className="App">
    <Paper elevation={2} className="paper" >
      {IsViewportLarge() && <LargeSidebar /> }
      {IsViewportMedium() && <MediumSidebar /> }
      {IsViewportMobile() && <MobileSidebar /> }

      <Form />
      <CardArea />
      <Box className="box-spacer" />
    </Paper>
  </Container>
  );
};
