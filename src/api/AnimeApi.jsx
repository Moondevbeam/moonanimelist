import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line
import axios, { all } from 'axios';

const allAnimeURL = 'https://api.jikan.moe/v4/anime';
const getAllAnime = async () => {
  const response = await axios.get(allAnimeURL);
  return response.data;
};

export const UseGetAllAnime = () => {
  const { isLoading, data } = useQuery(['allAnime'], getAllAnime);
  return { data, isLoading };
};
