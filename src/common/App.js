import './common.css';
import '../components/components.css';
import React, {useState} from "react";
import CardArea from "../components/CardArea";
import Form from "../components/Form";
import LargeSidebar, {MediumSidebar, MobileSidebar} from "./Sidebar";
import IsViewportLarge, {IsViewportMedium, IsViewportMobile} from "./Viewport";
import {Container, Paper, Box} from "@mui/material";

export default function App() {
  const [data, setData] = useState([]);
  
  function logData(log){
    setData(log);
  }; 
  
  return (
    <Container className="App">
      <Paper elevation={2} className="paper" >
        {IsViewportLarge() && <LargeSidebar /> }
        {IsViewportMedium() && <MediumSidebar /> }
        {IsViewportMobile() && <MobileSidebar /> }

        <Form addLog={logData} />
        <CardArea data={data} />
        <Box style={{height:40}} />
      </Paper>
    </Container>
  );
};
