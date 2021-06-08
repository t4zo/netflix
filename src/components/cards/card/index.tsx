import { useState } from 'react';
// import Image from 'next/image';
import styles from './card.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faThumbsDown, faCheck } from '@fortawesome/free-solid-svg-icons';

import { baseImageURL } from 'services/axios';

interface Props {
  item: any;
}

export default function Card({ item }: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [itemFeature, setItemFeature] = useState<any>(null);

  return (
    <div className={styles.card} onMouseEnter={() => setItemFeature(item)} onMouseLeave={() => setItemFeature(null)}>
      <img src={`${baseImageURL}${item.backdrop_path}`} width={350} />
      {itemFeature?.id !== undefined && (
        <div className={styles.info}>
          <div className={styles.actions}>
            <span className={styles.actionItem}>
              <FontAwesomeIcon icon={faPlay} color='#b3b3b3' />
            </span>
            <span className={styles.actionItem}>
              <FontAwesomeIcon icon={faPlus} color='#b3b3b3' />
            </span>
            <span className={styles.actionItem}>
              <FontAwesomeIcon icon={faThumbsUp} color='#b3b3b3' />
            </span>
            <span className={styles.actionItem}>
              <FontAwesomeIcon icon={faThumbsDown} color='#b3b3b3' />
            </span>
            <span className={styles.actionItemReadMore} onClick={() => setIsReadMoreOpen((isReadMoreOpen) => !isReadMoreOpen)}>
              <FontAwesomeIcon icon={faCheck} color='#b3b3b3' />
            </span>
          </div>
          {isReadMoreOpen && (
            <div className={styles.readMore}>
              <h3 className={styles.title}>{item.name}</h3>
              <p className={styles.description}>{item.overview}</p>
            </div>
          )}
          <div className={styles.metaData}>
            <span className={styles.relevant}>99% Relevant</span>
            <span className={styles.score}>{item.vote_average}</span>
            {item.adult && <span className={styles.maturity}>18+</span>}
          </div>
          <p className={styles.description}>{item.overview}</p>
          <div className={styles.evidenceTags}>
            <span>Explosive</span>
            <span>Violence</span>
            <span>Exciting</span>
          </div>
        </div>
      )}
    </div>
  );
}
