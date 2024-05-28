import React, { useState } from 'react';

const SearchBox = ({ onSearch, onToggleQuiz }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  const handleExtrasClick = () => {
    window.location.href = '/extras.html';
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar personagem..."
        value={query}
        onChange={handleInputChange}
      />
      <button className="button search-button" onClick={handleSearchClick}>
        Buscar
      </button>
      <button className="button" onClick={handleExtrasClick}>
        Extras
      </button>
      <button className="button" onClick={onToggleQuiz}>
        Quiz
      </button>
    </div>
  );
};

export default SearchBox;