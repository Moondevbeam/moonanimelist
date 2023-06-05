import React from 'react';

const Card = ({ anime, onClick }) => {
  const cardStyle = {
    border: '1px solid black',
    borderRadius: '5px',
    background: 'linear-gradient(180deg, rgba(0, 0, 255, 0.7) 0%, rgba(0, 0, 255, 0.3) 100%)',
    padding: '10px',
    marginBottom: '10px',
    maxWidth: '300px',
    width: '100%',
    cursor: 'pointer', // Aggiunto stile per indicare che la carta è cliccabile
  };

  const imageStyle = {
    width: '100%',
    height: '450px', // Imposta l'altezza fissa delle immagini
    objectFit: 'cover', // Per evitare la distorsione dell'immagine
    marginBottom: '10px',
  };

  const handleClick = () => {
    onClick(anime); // Richiama la funzione onClick passando l'anime come argomento
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <img src={anime.images.jpg.image_url} alt="anime" style={imageStyle} />
      <h1 style={{ fontSize: '16px' }}>{anime.title}</h1>
    </div>
  );
};

export default Card;
