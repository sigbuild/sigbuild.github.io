import './App.css';
import Table from "./components/Table";
import Form from "./components/Form";
function App() {
  const [data, setData] = useState(null);

  function handleData(data){
    setData(data);
  }
  return (
    <div className="App">
      <Form onBuild={handleData}/>
      <Table data={data} sigType={type}/>
    </div>
  );
}

export default App;
