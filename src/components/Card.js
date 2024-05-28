import React from 'react';

const Card = ({ personagem }) => {
  return (
    <div className="card">
      <img src={personagem.imageUrl} alt={personagem.fullName} />
      <h2>{personagem.fullName}</h2>
      <p>Título: {personagem.title}</p>
      <p>Família: {personagem.family}</p>
    </div>
  );
};

export default Card;