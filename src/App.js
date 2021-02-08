import "./App.css";

import InitialForm from "./InitialForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/companies")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <InitialForm data={data}></InitialForm>
      </div>
    </div>
  );
}

export default App;
