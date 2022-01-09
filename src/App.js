import React, {useState} from "react";
import './App.css';
import Table from "./components/Table";
import Form from "./components/Form";
import {Container} from "@material-ui/core";
export default function App() {
  const [data, setData] = useState([]);
  function logData(log){
    setData(log);
  };

  return (
    <Container fixed className="App">
      <Form addLog={logData} />
      <Table data={data} />
    </Container>
  );
};
