import { useEffect, useState } from 'react';
import apiClient from 'services/apiClient';
import { MovieTrailerResponse, MovieVideo } from 'types';
import { apiName } from 'utils';

interface UseMovieTrailerResult {
  loading: boolean;
  trailer: MovieVideo | null;
  error: string | null;
}

const useMovieTrailer = (movieId: number): UseMovieTrailerResult => {
  const [loading, setLoading] = useState(true);
  const [trailer, setTrailer] = useState<MovieTrailerResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoading(true);
        const res = await apiClient.getData(
          `${apiName.getMovieDetail}${movieId}${apiName.getTrailer}`,
        );
        const trailers: MovieVideo[] = res.data.results;

        const selected = trailers.find(
          t => t.type === 'Trailer' && t.site === 'YouTube',
        );
        console.log('I am selected', selected);

        setTrailer(selected);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Failed to load trailer');
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return { loading, trailer, error };
};

export default useMovieTrailer;
