export default function CountryDropdown({ countries, onCountrySelect }) {
  return (
    <>
      {
        <ul>
          {countries.slice(0, 10).map((country) => (
            <li
              key={country.name.common}
              onClick={() => onCountrySelect(country)}
            >
              <img
                src={country.flags.png}
                width='20'
                alt={country.name.common}
              />
              {country.name.common}
            </li>
          ))}
        </ul>
      }
    </>
  );
}
