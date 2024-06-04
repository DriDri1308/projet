import React, { useState } from 'react';
import causaDeMorte from './Morte'; // Importe a lista de causas de morte

const Card = ({ personagem }) => {
  const [mostrarCausaMorte, setMostrarCausaMorte] = useState(false);

  const toggleCausaMorte = () => {
    setMostrarCausaMorte(!mostrarCausaMorte);
  };

  // Encontre a causa de morte correspondente ao nome do personagem
  const causaDeMorteTexto = causaDeMorte.find(item => item.firstName === personagem.firstName)?.causaDeMorte;

  return (
    <div className={`card ${mostrarCausaMorte ? 'is-flipped' : ''}`} onClick={toggleCausaMorte}>
      <div className="card-inner">
        <div className="card-front">
          <img src={personagem.imageUrl} alt={personagem.fullName} />
          <h2>{personagem.fullName}</h2>
          <p>Título: {personagem.title}</p>
          <p>Família: {personagem.family}</p>
        </div>
        <div className="card-back">
  <p style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
    <strong>Causa de Morte:</strong> {causaDeMorteTexto ? causaDeMorteTexto : 'VIVO'}
  </p>
</div>
      </div>
    </div>
  );
};

export default Card;