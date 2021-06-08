export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  // genres: IGenre[] | undefined[];
  genres: any;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  images: IImage;
}

export interface ISerie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  genres: any;
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  media_type: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IImage {
  backdrops: IImageData[];
  posters: IImageData[];
}

export interface IImageData {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
