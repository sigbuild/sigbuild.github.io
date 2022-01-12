import './common.css';
import '../components/components.css';
import React, {useState} from "react";
import CardArea from "../components/CardArea";
import Form from "../components/Form";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import IsViewportBig from "./Viewport";
import {Container, Paper} from "@mui/material";

export default function App() {
  const [data, setData] = useState([]);
  function logData(log){
    setData(log);
  }; 
  
  return (
    <Container className="App">
      <Paper elevation={2} className="paper" >
        {IsViewportBig() ? <TopBar size="larger" /> : <TopBar size="smaller" /> }
        {IsViewportBig() ? <Sidebar size="larger" /> : <Sidebar size="smaller" /> }

        <Form addLog={logData} />
        <CardArea data={data} />
      </Paper>
    </Container>
  );
};
