import React, { useState } from 'react';

function SearchBar({ onLocationChange }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;