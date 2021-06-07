import { IGenre, IMovie } from 'interfaces/tmdb';
import { axiosTmdb } from 'services/axios';

export async function getTrendingMovies(): Promise<IMovie[] | undefined> {
  try {
    const response = await axiosTmdb.get(`/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=pt-BR&append_to_response=images&include_image_language=pt`);
    const results = response.data.results as IMovie[];
    console.log('r', results)
    return results;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres() {
  try {
    const response = await axiosTmdb.get(`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB}&language=pt-BR`);
    const results = response.data.genres as IGenre[];
    if (!results) {
      return [
        {
          id: 0,
          name: '',
        },
      ];
    }

    return results;
  } catch (error) {
    console.error(error);
  }
}
