import { useState, useEffect} from 'react'

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

    const filteredCountries =  countries.filter(country => country.name.common.toLowerCase().includes(text.toLowerCase()));

    
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
       {text.length > 0 ? <ul>{filteredCountries.map(country => (
        <li key={country.name.common} onClick = {() => setText(country.name.common)}>
          {country.name.common}
        </li>
      ))}
      </ul> : null}
    </div>
  )
}

export default App
