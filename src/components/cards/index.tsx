import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'components/cards/card';
import { useContent } from 'hooks';

import styles from './items-content.module.scss';
import genreFilter, { IFilteredServices } from 'genre-filter';
import { SERIES, FILMS } from '../../constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

interface Props {
  type: string;
}

export default function Cards({ type }: Props) {
  const [mouseOverGenreText, setMouseOverGenreText] = useState('');
  const originalContentType = useContent(type);
  const [content, setContent] = useState<IFilteredServices[]>(originalContentType);

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

  return (
    <>
      {content.map((typeFiltered) => (
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
      ))}
    </>
  );
}
