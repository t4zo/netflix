import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'components/cards/card';
import { useContent } from 'hooks';

import { IGenre } from 'interfaces/tmdb';
// import { getShuffledArray } from 'utils/arrays';

import styles from './items-content.module.scss';

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination } from "swiper/core";
// install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

interface Props {
  type: string;
}

export default function Cards({ type }: Props) {
  const [mouseOverGenreText, setMouseOverGenreText] = useState('');
  const { content } = useContent(type);
  const [genres, setGenres] = useState<IGenre[]>();

  useEffect(() => {
    const genres = content
      ?.map((m: any) => m.genres)
      .flat()
      .filter((v: any, i: any, a: any) => a.findIndex((t: any) => JSON.stringify(t) === JSON.stringify(v)) === i) as IGenre[];

    setGenres(genres);
  }, [content]);

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
              {/* <Swiper spaceBetween={10} slidesPerView={5}> */}
              {content?.filter((c: any) => c.genre_ids.includes(genre.id)).map((item: any) => (
                // <SwiperSlide key={item.id}>
                <Card key={item.id} item={item} />
                // </SwiperSlide>
              ))}
              {/* </Swiper> */}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
