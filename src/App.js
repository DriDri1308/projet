import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import Button from './components/Button';
import SearchBox from './components/SearchBox';
import './card.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://game-of-thrones1.p.rapidapi.com/Characters`, {
          headers: {
            'x-rapidapi-key': 'a60c34eb32msh7f1e43c89763490p1b7dd8jsnd0d17641af17',
            'x-rapidapi-host': 'game-of-thrones1.p.rapidapi.com',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data);
        setFilteredCharacters(data); // Initialize filteredCharacters with all characters
      } catch (error) {
        console.error('Error fetching characters: ' + error.message);
      }
    };

    fetchCharacters();
  }, []);

  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const selectedCharacters = filteredCharacters.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearch = (query) => {
    if (query.length < 3) {
      alert('A busca deve conter pelo menos 3 caracteres');
      return;
    }

    const filtered = characters.filter((character) => 
      character.fullName.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      alert('Busca inválida');
    } else {
      setFilteredCharacters(filtered);
      setSearchQuery(query);
      setPage(1); // Reset to first page after search
    }
  };

  const handleToggleExtras = () => {
    window.location.href = `${process.env.PUBLIC_URL}/extras.html`;
  };

  const handleToggleQuiz = () => {
    window.location.href = `${process.env.PUBLIC_URL}/quiz.html`;
  };

  const handleResetSearch = () => {
    setFilteredCharacters(characters);
    setSearchQuery('');
    setPage(1); // Reset to first page
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Game of Thrones</h1>
      </div>
      <SearchBox onSearch={handleSearch} onToggleExtras={handleToggleExtras} onToggleQuiz={handleToggleQuiz} />
      <CardList characters={selectedCharacters} />
      <div className="pagination">
        {page > 1 && (
          <Button onClick={handlePreviousPage} label="Página Anterior" />
        )}
        {filteredCharacters.length > startIndex + itemsPerPage && (
          <Button onClick={handleNextPage} label="Próxima Página" />
        )}
      </div>
      {searchQuery && (
        <div className="reset-search">
          <Button onClick={handleResetSearch} label="Voltar" />
        </div>
      )}
    </div>
  );
};

export default App;