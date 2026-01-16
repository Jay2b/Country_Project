export default function PlacesList({ places, removePlace }) {
  return (
    <ul className='space-y-2'>
      {places.map((place) => (
        <li
          key={place.name.common}
          className='flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg'
        >
          <div className='flex items-center gap-2'>
            <img
              src={place.flags.png}
              alt={place.name.common}
              className='w-6 h-4 object-cover rounded-sm'
            />
            <span>{place.name.common}</span>
          </div>

          <button
            onClick={() => removePlace(place.name.common)}
            className='text-red-500 hover:text-red-700 font-semibold'
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
