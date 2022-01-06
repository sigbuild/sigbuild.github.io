import React, {useState} from "react";
import './App.css';
import Table from "./components/Table";
import Form from "./components/Form";

export default function App() {
  const [data, setData] = useState([]);
  
  function logData(log){
    setData(log);
  };

  return (
    <div className="App">
      <Form addLog={logData}/>
      <Table data={data} />
    </div>
  );
};
