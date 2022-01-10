import React, {useState} from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import {Container, Paper} from "@material-ui/core";
export default function App() {
  const [data, setData] = useState([]);
  function logData(log){
    setData(log);
  };
  return (
    <Container className="App">
      <Paper className="paper" variant="outlined">
        <Form addLog={logData} />
        <Table data={data} />
      </Paper>
    </Container>
  );
};
