import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'components/cards/card';
import { useContent } from 'hooks';

import styles from './items-content.module.scss';
import genreFilter, { IFilteredServices } from 'genre-filter';
import { SERIES, FILMS } from '../../constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IGenre } from 'interfaces/tmdb';
// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

interface Props {
  type: string;
}

export default function Cards({ type }: Props) {
  const [mouseOverGenreText, setMouseOverGenreText] = useState('');
  const { content: originalContentType, movies } = useContent(type);
  const [content, setContent] = useState<IFilteredServices[]>(originalContentType);
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    if (type === SERIES) {
      const { series } = genreFilter({ series: originalContentType });
      setContent(series);
    }

    if (type === FILMS) {
      const { films } = genreFilter({ films: originalContentType });
      setContent(films);
    }
  }, [genreFilter, originalContentType]);

  useEffect(() => {
    const genres = movies?.map(m => m.genres).flat().filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i) as IGenre[];
    setGenres(genres);
  }, [movies]);

  return (
    <>
      {genres?.map((genre) => (
        <div className={styles.genreContainer} key={genre.name}>
          <>
            <h2 className={styles.genreTitle} onMouseEnter={() => setMouseOverGenreText(genre.name)} onMouseLeave={() => setMouseOverGenreText('')}>
              {genre.name}
              {mouseOverGenreText === genre.name && <Image src='/images/icons/chevron-right.png' width={16} height={16} />}
            </h2>
            <div className={styles.genreList}>
              <Swiper spaceBetween={10} slidesPerView={5}>
                {movies?.filter(movie => movie.genre_ids.includes(genre.id)).map((item) => (
                  <SwiperSlide key={item.id}>
                    <Card key={item.id} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        </div>
      ))}
      {/* {content.map((typeFiltered) => (
        <div className={styles.genreContainer} key={typeFiltered.title}>
          <>
            <h2 className={styles.genreTitle} onMouseEnter={() => setMouseOverGenreText(typeFiltered.title)} onMouseLeave={() => setMouseOverGenreText('')}>
              {typeFiltered.title}
              {mouseOverGenreText === typeFiltered.title && <Image src='/images/icons/chevron-right.png' width={16} height={16} />}
            </h2>
            <div className={styles.genreList}>
              <Swiper spaceBetween={10} slidesPerView={5}>
                {typeFiltered.data.map((item) => (
                  <SwiperSlide>
                    <Card key={item.id} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        </div>
      ))} */}
    </>
  );
}
