import React from 'react';

const Card = ({ anime, onClick }) => {
  if (!anime) {
    return null;
  }

  const handleClick = () => {
    onClick(anime);
  };

  return (
    <div
      className="flex items-center p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
      onClick={handleClick}
    >
      {anime.images && anime.images.jpg && anime.images.jpg.image_url && (
        <div className="flex-shrink-0 w-16 h-24 md:w-24 md:h-32 rounded-lg mr-4">
          <img
            src={anime.images.jpg.image_url}
            alt="anime"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      )}
      <div>
        <h1 className="text-white text-sm md:text-base font-medium mb-1">{anime.title}</h1>
        {anime.score && (
          <p className="text-gray-400 text-xs md:text-sm">Score: {anime.score.toFixed(2)}</p>
        )}
        {anime.rank && (
          <p className="text-gray-400 text-xs md:text-sm">Rank: {anime.rank}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
