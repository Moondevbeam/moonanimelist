import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import AnimeDetailPage from './AnimeDetailPage';
import '../styles/animesearch.css';

function AnimeSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    if (searchValue !== '') {
      clearTimeout(typingTimeout);

      const timeout = setTimeout(() => {
        searchAnime(searchValue);
      }, 500);

      setTypingTimeout(timeout);
    } else {
      // Effettua la richiesta API iniziale solo se il valore di ricerca è vuoto
      if (results.length === 0 && !selectedAnime) {
        const apiUrl = 'https://api.jikan.moe/v4/top/anime';

        axios.get(apiUrl)
          .then(response => {
            setResults(response.data.data ?? []);
          })
          .catch(error => {
            console.error('Si è verificato un errore durante la ricerca:', error);
          });
      }
    }
    // eslint-disable-next-line
  },[searchValue, results.length, selectedAnime]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchAnime = (value) => {
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(value)}`;

    axios.get(apiUrl)
      .then(response => {
        setResults(response.data.data ?? []);
      })
      .catch(error => {
        console.error('Si è verificato un errore durante la ricerca:', error);
      });
  };

  const handleCardClick = (anime) => {
    setSelectedAnime(anime);
  };

  const handleGoBack = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="container">
      <div className="search-container">
        <h1 className="title">moonAnimelist</h1>
        <div className="input-container">
          <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Inserisci il nome dell'anime" className="search-input" />
        </div>
      </div>

      <div className="results-container">
        {results.length === 0 && !selectedAnime && (
          <p>Nessun risultato trovato.</p>
        )}

        {results.length > 0 && !selectedAnime && (
          <div className="cards-container">
            {results.map(anime => (
              <Card key={anime.id} anime={anime} onClick={handleCardClick} />
            ))}
          </div>
        )}

        {selectedAnime && (
          <AnimeDetailPage anime={selectedAnime} goBack={handleGoBack} />
        )}
      </div>
    </div>
  );
}

export default AnimeSearch;
