import { useState, useEffect, use} from 'react'

import './App.css'

function App() {
 
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, []);

  const addToList = () => {
      
    const newPlaces = [...places, text];
    setPlaces(newPlaces);
    setText("");
  }

  return(
    <div>
      <h1>Countries List</h1>
       <input type="text" onChange={(e) => (setText(e.target.value))} value= {text}/>
       <button onClick = {addToList}>Dodaj do listy</button>
       <ul>
       {places.map(place => (
        <li key = {place}>{place}</li>
       ))} 
       </ul>
      <ul>{countries.map(country => (
        <li key={country.name.common}>
          {country.name.common}
        </li>
      ))}

      </ul>
    </div>
  )
}

export default App
