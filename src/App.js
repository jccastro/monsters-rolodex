import "./App.css";
import { useEffect, useState } from "react";
import ClassList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchTerm]);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title"> Monsters Rolodex </h1>
      <SearchBox
        type="text"
        placeholder="Search Monster"
        className="search-box"
        onChange={searchHandler}
      ></SearchBox>
      <ClassList monsters={filteredMonsters}></ClassList>
    </div>
  );
}

export default App;
