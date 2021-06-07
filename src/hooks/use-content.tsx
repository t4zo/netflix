import { useCallback, useContext, useEffect, useState } from 'react';
import FirebaseContext from 'contexts/firebaseContext';
import { getCollection } from 'services/firebase';
import { getGenres, getTrendingMovies } from 'services/tmdb';
import { IMovie } from 'interfaces/tmdb';

export default function useContent(collectionName: string) {
  const [content, setContent] = useState<any>([]);
  const [movies, setMovies] = useState<IMovie[]>();
  const { firebase } = useContext(FirebaseContext);

  const getCollectionCallback = useCallback(async () => {
    try {
      const content = await getCollection(collectionName);
      setContent(content);
    } catch (error) {
      console.error(error.message);
    }
  }, [collectionName]);

  const getMoviesCallback = useCallback(async () => {
    try {
      const trendingMovies = await getTrendingMovies();
      if (!trendingMovies) return;

      let allGenres = await getGenres();

      var movies = await Promise.all(
        trendingMovies.map(async movie => {
          const genres = movie.genre_ids.map((genre_id) => {
            const genre = allGenres?.find((g) => g.id === genre_id);
            return genre;
          });

          return {
            ...movie,
            genres: genres,
          };
        })
      );

      console.log(movies)
      setMovies(movies);
    } catch (error) {
      console.error(error.message);
    }
  }, [collectionName]);

  useEffect(() => {
    getCollectionCallback();
    getMoviesCallback();
  }, [getCollectionCallback, getMoviesCallback]);

  useEffect(() => {
    async function fetchFirebaseDependencies() {
      if (!firebase.auth) {
        await import('firebase/auth');
      }

      if (!firebase.firestore) {
        await import('firebase/firestore');
      }
    }

    fetchFirebaseDependencies();
  }, []);

  // return { [target]: content };
  return {
    content,
    movies,
  };
}
