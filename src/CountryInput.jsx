export default function CountryInput({
  value,
  onChange,
  onSubmit,
  duplicateError,
}) {
  return (
    <div className='space-y-3'>
      <h1 className='text-2xl font-semibold text-gray-800'>Countries List</h1>

      <div className='flex gap-2'>
        <input
          type='text'
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
          placeholder='Type a country name...'
          className='flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
        />

        <button
          onClick={onSubmit}
          className='px-4 py-2 bg-black text-white rounded-lg hover:bg-stone-600 transition'
        >
          Add
        </button>
      </div>

      {duplicateError && (
        <p className='text-sm text-red-500'>
          Country is already added to the list
        </p>
      )}
    </div>
  );
}
