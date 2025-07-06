import { useState, useEffect } from 'react';
import { apiName } from 'utils';
import { UpcomingMovie } from 'types';
import apiClient from 'services/apiClient';

const useMovieSearch = (search: string) => {
  //added this falvour in order to show the concepts of hooks as well

  const [searchResults, setSearchResults] = useState<UpcomingMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!search) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    const timeoutId = setTimeout(async () => {
      try {
        const url = `${apiName.searchMovie}?query=${encodeURIComponent(
          search,
        )}`;
        const response = await apiClient.getData(url);
        const results = response?.data?.results || [];
        setSearchResults(results);
        setError(null);
      } catch (err) {
        console.error('Movie search error:', err);
        setError(err);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    }, 500); // debounce time

    return () => clearTimeout(timeoutId);
  }, [search]);

  return { searchResults, loading, error };
};

export default useMovieSearch;
