export default function CountryDropdown({ countries, onCountrySelect }) {
  return (
    <ul className='border rounded-lg shadow-sm bg-white max-h-60 overflow-y-auto'>
      {countries.slice(0, 10).map((country) => (
        <li
          key={country.name.common}
          onClick={() => onCountrySelect(country)}
          className='flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100'
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            className='w-5 h-4 object-cover rounded-sm'
          />
          <span>{country.name.common}</span>
        </li>
      ))}
    </ul>
  );
}
