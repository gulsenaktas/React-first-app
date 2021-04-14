import Search from "./Search"
import Tables from "./Tables"
import TableInfo from "./TableInfo"
import { useState } from "react";


function App() {
  const [secretKey, setSecretKey] = useState("")
  const [tableName, setTableName] = useState("")

  return (
    <div className="App">
      <div className="wrapper">
        <Search setSecretKey={setSecretKey}/>
        <Tables secretKey={secretKey} setTableName={setTableName}/>
      </div>
      <TableInfo secretKey={secretKey} tableName={tableName}/>
    </div>
  );
}

export default App;
