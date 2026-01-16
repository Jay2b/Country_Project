import { useState, useEffect } from "react";
import "./App.css";
import PlacesList from "./PlacesList";
import CountryDropdown from "./CountryDropdown";
import CountryInput from "./CountryInput";

function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [places, setPlaces] = useState([]);
  const [duplicateError, setDuplicateError] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(text.toLowerCase())
  );

  const addToList = (country) => {
    if (!country) return;

    const isDuplicate = places.some(
      (place) =>
        place.name.common.toLowerCase() === country.name.common.toLowerCase()
    );

    if (isDuplicate) {
      setDuplicateError(true);
      return;
    }

    setPlaces([...places, country]);
    setText("");
    setDuplicateError(false);
  };

  const removePlace = (placeToRemove) => {
    const newPlaces = places.filter(
      (place) => place.name.common !== placeToRemove
    );
    setPlaces(newPlaces);
  };

  const handleTextChange = (value) => {
    setText(value);
    setDuplicateError(false);
  };

  const handleSubmit = () => {
    const country = countries.find(
      (c) => c.name.common.toLowerCase() === text.toLowerCase()
    );

    if (!country) return;

    addToList(country);
  };

  return (
    <div className='min-h-screen bg-zinc-400 flex justify-center py-10'>
      <div className='w-full max-w-md bg-zinc-200 rounded-xl shadow-md p-6 space-y-6'>
        <CountryInput
          value={text}
          onChange={handleTextChange}
          onSubmit={handleSubmit}
          duplicateError={duplicateError}
        />

        {text.length > 0 && (
          <CountryDropdown
            countries={filteredCountries}
            onCountrySelect={addToList}
          />
        )}

        <PlacesList places={places} removePlace={removePlace} />
      </div>
    </div>
  );
}

export default App;
