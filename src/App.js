import "./App.css";
import { useEffect, useState } from "react";
import ClassList from "./components/card-list/card-list.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <ClassList monsters={monsters}></ClassList>
    </div>
  );
}

export default App;
