export default function PlacesList({ places, removePlace }) {
  return (
    <>
      <ul>
        {places.map((place) => (
          <li key={place.name.common}>
            <img src={place.flags.png} width='24' />
            {place.name.common}
            <button onClick={() => removePlace(place.name.common)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
