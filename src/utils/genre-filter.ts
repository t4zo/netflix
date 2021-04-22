import { IMedia } from 'interfaces';

interface IGenreMap {
  series?: IMedia[];
  films?: IMedia[];
}

export interface IGenreMapResult {
  series: IFilteredServices[];
  films: IFilteredServices[];
}

interface IFilteredServices {
  title: string;
  data: IMedia[];
}

export default function genreFilter({ series, films }: IGenreMap) : IGenreMapResult {
  let filteredSeries: IFilteredServices[] = [];
  let filteredFilms: IFilteredServices[] = [];

  if (series) {
    const serieGenres = series.map((serie) => serie.genre).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    filteredSeries = serieGenres.map((genre) => ({
      title: genre,
      data: series.filter((serie) => serie.genre === genre),
    }));
  }

  if (films) {
    const filmsGenres = films.map((film) => film.genre).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    filteredFilms = filmsGenres.map((genre) => ({
      title: genre,
      data: films.filter((film) => film.genre === genre),
    }));
  }

  return {
    series: filteredSeries,
    films: filteredFilms,
  };
}
