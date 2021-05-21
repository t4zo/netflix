import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'components/card';
import { SERIES, FILMS } from '../../constants';
import { useContent } from 'hooks';

import styles from './items-content.module.scss';
import genreFilter, { IFilteredServices } from 'genre-filter';

interface Props {
  type: string;
}

export default function ItemsContent({ type }: Props) {
  const [content, setContent] = useState<IFilteredServices[]>();
  const [isMouseOverGenreText, setIsMouseOverGenreText] = useState('');

  useEffect(() => {
    const originalType = useContent(type);

    if (type === SERIES) {
      const { series } = genreFilter({ series: originalType });
      setContent(series);
    }

    if (type === FILMS) {
      console.log(originalType);
      const { films } = genreFilter({ films: originalType });
      setContent(films);
    }
  }, [genreFilter, type]);

  if (!content) {
    return <p>Loading</p>;
  }

  return (
    <>
      {content.map((typeFiltered) => (
        <div className={styles.genreContainer} key={typeFiltered.title}>
          <>
            <h2 className={styles.genreTitle} onMouseEnter={() => setIsMouseOverGenreText(typeFiltered.title)} onMouseLeave={() => setIsMouseOverGenreText('')}>
              {typeFiltered.title}
              {isMouseOverGenreText === typeFiltered.title && <Image src='/images/icons/chevron-right.png' width={16} height={16} />}
            </h2>
            <div className={styles.genreList}>
              {typeFiltered.data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </>
        </div>
      ))}
    </>
  );
}
