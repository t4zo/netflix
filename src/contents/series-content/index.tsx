import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from 'components/card';
import { useContent } from 'hooks';

import styles from './series-content.module.scss';
import genreFilter, { IFilteredServices } from 'genre-filter';
import { SERIES } from '../../constants';

export default function ItemsContent() {
  const [content, setContent] = useState<IFilteredServices[]>();
  const [isMouseOverGenreText, setIsMouseOverGenreText] = useState('');
  const originalType = useContent(SERIES);

  useEffect(() => {
    const { series } = genreFilter({ series: originalType });
    setContent(series);
  }, [genreFilter, originalType]);

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
