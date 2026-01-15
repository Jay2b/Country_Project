import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(text.toLowerCase())
  );
  const duplicates = places.some(
    (place) => place.name.common.toLowerCase() === text.toLowerCase()
  );

  const addToList = (country) => {
    const newPlaces = [...places, country];
    if (!country) return;
    if (duplicates) return;

    setPlaces(newPlaces);
    setText("");
  };

  const removePlace = (placeToRemove) => {
    const newPlaces = places.filter(
      (place) => place.name.common !== placeToRemove
    );
    setPlaces(newPlaces);
  };

  return (
    <div>
      <h1>Countries List</h1>
      <input
        type='text'
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addToList(filteredCountries[0]);
          }
        }}
      />
      <button onClick={() => addToList(filteredCountries[0])}>
        Add to list{" "}
      </button>
      {duplicates ? <p>Country is already added to the list</p> : null}
      {text.length === 0 && places.length === 0 ? (
        <p>List is empty! Add something!!</p>
      ) : null}
      <ul>
        {places.map((place) => (
          <li key={place.name.common}>
            <img src={place.flags.png} width='24' />
            {place.name.common}
            <button onClick={() => removePlace(place.name.common)}>X</button>
          </li>
        ))}
      </ul>
      {text.length > 0 ? (
        <ul>
          {filteredCountries.slice(0, 10).map((country) => (
            <li key={country.name.common} onClick={() => addToList(country)}>
              <img
                src={country.flags.png}
                width='20'
                alt={country.name.common}
              />
              {country.name.common}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
