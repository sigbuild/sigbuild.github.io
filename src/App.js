import React, {useState} from "react";
import './App.css';
import Table from "./components/Table";
import Form from "./components/Form";

export default function App() {
  const [data, setData] = useState([]);
  const [userChange, setUserChange] = useState(0);

  function logData(log){
    setData(log);
  };

  function handleUserState(){
    setUserChange(userChange+1);
  };

  return (
    <div onMouseMove={event=>handleUserState(event)} className="App">
      <Form addLog={logData} requestUpdate={userChange} />
      <Table data={data} />
    </div>
  );
};
