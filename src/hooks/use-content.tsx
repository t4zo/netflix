import { useCallback, useContext, useEffect, useState } from 'react';
import FirebaseContext from 'contexts/firebaseContext';
import { getGenresMovies, getGenresSeries, getTrendingMovies, getTrendingSeries } from 'services/tmdb';
// import { getCollection } from 'services/firebase';
// import { IMovie, ISerie } from 'interfaces/tmdb';

export default function useContent(type: string) {
  const [content, setContent] = useState<any>([]);
  // const [movies, setMovies] = useState<IMovie[]>();
  // const [series, setSeries] = useState<ISerie[]>();
  const { firebase } = useContext(FirebaseContext);

  const getCollectionCallback = useCallback(async () => {
    try {
      // const content = await getCollection(type);
      // setContent(content);
      if (type === 'series') {
        await getSeriesCallback();
      }

      if (type === 'films') {
        await getMoviesCallback();
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [type]);

  const getMoviesCallback = useCallback(async () => {
    try {
      const trendingMovies = await getTrendingMovies();
      if (!trendingMovies) return;

      let allGenres = await getGenresMovies();

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


      setContent(movies);
      // setMovies(movies);
    } catch (error) {
      console.error(error.message);
    }
  }, [type]);

  const getSeriesCallback = useCallback(async () => {
    try {
      const trendingSeries = await getTrendingSeries();
      if (!trendingSeries) return;

      let allGenres = await getGenresSeries();

      var series = await Promise.all(
        trendingSeries.map(async serie => {
          const genres = serie.genre_ids.map((genre_id) => {
            const genre = allGenres?.find((g) => g.id === genre_id);
            return genre;
          });

          return {
            ...serie,
            genres: genres,
          };
        })
      );

      setContent(series);
      // setSeries(series);
    } catch (error) {
      console.error(error.message);
    }
  }, [type]);

  useEffect(() => {
    getCollectionCallback();
  }, [getCollectionCallback]);

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
    // movies,
    // series,
  };
}
