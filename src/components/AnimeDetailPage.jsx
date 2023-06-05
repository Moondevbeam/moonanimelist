import React from 'react';

const AnimeDetailPage = ({ anime, goBack }) => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const imageStyle = {
    width: '300px',
    height: 'auto',
    marginBottom: '10px',
  };

  const backButtonStyle = {
    marginTop: '20px',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={pageStyle}>
      <h1 className='white'>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt="anime" style={imageStyle} />
      <p className='white'>{anime.synopsis}</p>
      <div className='white' style={backButtonStyle} onClick={goBack}>
        &lt; Go Back
      </div>
    </div>
  );
};

export default AnimeDetailPage;
