import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Card from './Card';
import Sidebar from './SideBar';
import AnimeDetailPage from './AnimeDetailPage';

function AnimeSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchAnime = async (value) => {
      try {
        const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(value)}`;
        const response = await axios.get(apiUrl);
        const searchResults = response.data.data ?? [];
        setResults(searchResults);
        setError(null);
      } catch (error) {
        console.error('An error occurred during the search:', error);
        setResults([]);
        setError('An error occurred during the search. Please try again later.');
      }
    };

    const debounceTimer = setTimeout(() => {
      searchAnime(searchValue);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleCardClick = (anime) => {
    setSelectedAnime(anime);
  };

  const handleGoBack = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <SearchBar
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search Anime..."
        />
        {selectedAnime ? (
          <AnimeDetailPage anime={selectedAnime} goBack={handleGoBack} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.slice(0, 12).map((anime) => (
              <Card key={anime.id} anime={anime} onClick={handleCardClick} />
            ))}
          </div>
        )}
        <Sidebar onItemClick={handleCardClick} />
      </div>
    </div>
  );
}

export default AnimeSearch;
