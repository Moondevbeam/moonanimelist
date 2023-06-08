import React from 'react';

const AnimeDetailPage = ({ anime, goBack }) => {
  return (
    <div className="flex flex-col items-center p-20">
      <h1 className="text-white">{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt="anime" className="w-300 h-auto mb-10" />
      <p className="text-white">{anime.synopsis}</p>
      <div className="text-white mt-20 cursor-pointer underline" onClick={goBack}>
        &lt; Go Back
      </div>
    </div>
  );
};

export default AnimeDetailPage;

