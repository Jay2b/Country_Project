export default function CountryInput({
  value,
  onChange,
  onSubmit,
  duplicateError,
}) {
  return (
    <>
      <h1>Countries List</h1>
      <input
        type='text'
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      />
      <button onClick={onSubmit}>Add to list </button>
      {duplicateError && <p>Country is already added to the list</p>}
    </>
  );
}
