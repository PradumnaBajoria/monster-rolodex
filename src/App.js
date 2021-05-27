import React, {useEffect, useState} from "react"
import './App.css';
import CardList from "./components/cardList/CardList"
import SearchBox from "./components/searchBox/SearchBox"

function App() {

  const [monsters, setMonsters] = useState(
    [ ]
  )
  const [search, setSearch] = useState("")

  //const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setMonsters(
      users
    ))
    
  }, [])

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="App">
      <SearchBox 
        placeholder='search monsters'
        handleChange = {e => setSearch(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
