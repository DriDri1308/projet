import React from 'react';
import Card from './Card'; // Verifique se o caminho para o arquivo Card.js está correto

const CardList = ({ characters }) => {
  return (
    <div className="card-list">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Card key={character.id} personagem={character} />
        ))
      ) : (
        <p className="not-found">Item não encontrado</p>
      )}
    </div>
  );
};

export default CardList;