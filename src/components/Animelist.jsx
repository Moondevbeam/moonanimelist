import React, { useState } from 'react';
import { UseGetAllAnime } from '../api/AnimeApi';
import Card from './Card';
import AnimeDetailPage from './AnimeDetailPage';
import '../styles/animelist.css';

const AnimeList = () => {
  const { data, isLoading } = UseGetAllAnime();
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleCardClick = (anime) => {
    setSelectedAnime(anime);
  };

  const handleGoBack = () => {
    setSelectedAnime(null);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value) {
      const results = data?.data?.filter((anime) =>
        anime.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (selectedAnime) {
    return <AnimeDetailPage anime={selectedAnime} goBack={handleGoBack} />;
  }

  return (
    <div className="anime-list-container">
      <div className="header-container">
        <h1 className="white center">
          <strong>moon</strong>AnimeList
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Anime..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
      <div className="card-container">
        {searchResults
          ? searchResults.map((anime) => (
              <Card key={anime.id} anime={anime} onClick={() => handleCardClick(anime)} />
            ))
          : data?.data?.map((anime) => (
              <Card key={anime.id} anime={anime} onClick={() => handleCardClick(anime)} />
            ))}
      </div>
    </div>
  );
};

export default AnimeList;
