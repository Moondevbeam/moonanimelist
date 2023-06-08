import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SlideCarousels = ({ onItemClick }) => {
  const [animeData, setAnimeData] = useState({
    upcoming: [],
    airing: [],
    popularity: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoints = {
          upcoming: 'https://api.jikan.moe/v4/top/anime?filter=upcoming',
          airing: 'https://api.jikan.moe/v4/top/anime?filter=airing',
          popularity: 'https://api.jikan.moe/v4/top/anime?filter=bypopularity',
        };

        const fetchPromises = Object.keys(endpoints).map(async (key) => {
          const response = await axios.get(endpoints[key]);
          return response.data.data ?? [];
        });

        const [upcomingAnime, airingAnime, popularityAnime] = await Promise.all(fetchPromises);
        setAnimeData({ upcoming: upcomingAnime, airing: airingAnime, popularity: popularityAnime });
      } catch (error) {
        console.error('An error occurred while fetching anime data:', error);
      }
    };

    fetchData();
  }, []);

  const renderCarousel = (animeList, title, carouselId) => (
    <div className="cursor-pointer w-full max-w-xs mb-4 carousel-container">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">{title}</h2>
      <div id={carouselId} className="carousel slide d-flex" data-bs-ride="carousel">
        <div className="carousel-inner">
          {animeList.slice(0, 10).map((anime, index) => (
            <div
              key={anime.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              onClick={() => onItemClick(anime)}
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="d-block w-100 h-80 object-cover rounded"
              />
              <div className="carousel-caption d-block">
                <h5>{anime.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 flex flex-col md:flex-row justify-center items-center">
      {renderCarousel(animeData.upcoming, 'Upcoming Anime', 'upcomingCarousel')}
      {renderCarousel(animeData.airing, 'Top Airing Anime', 'airingCarousel')}
      {renderCarousel(animeData.popularity, 'Top Popularity Anime', 'popularityCarousel')}
    </div>
  );
};

export default SlideCarousels;
