import { useContext, useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faThumbsUp, faThumbsDown, faCheck } from '@fortawesome/free-solid-svg-icons'

import FeatureContext from 'contexts/featureContext';
import { IMedia } from 'interfaces';
import { IMovie } from 'interfaces/tmdb';
import { baseImageURL } from 'services/axios';

interface Props {
  item: IMovie;
}

export default function Card({ item }: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const { itemFeature, setItemFeature } = useContext(FeatureContext);
  // console.log(itemFeature?.id)
  // console.log(item.id)
  return (
    <div
      className={styles.card}
      onMouseOver={() => setItemFeature(item)}>
      <Image src={`${baseImageURL}${item.backdrop_path}`} width={293} height={165} layout='fixed' />
      {/* <Image src={`/images/${item.type}/${item.genre}/${item.slug}/small.jpg`} width={293} height={165} layout='fixed' /> */}
      {/* {itemFeature?.id == item.id.toString() && ( */}
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
            <span className={styles.actionItemReadMore} onClick={() => setIsReadMoreOpen(isReadMoreOpen => !isReadMoreOpen)}>
              <FontAwesomeIcon icon={faCheck} color='#b3b3b3' />
            </span>
          </div>
          {isReadMoreOpen && (
            <div className={styles.readMore}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.overview}</p>
            </div>
          )}
          <div className={styles.metaData}>
            <span className={styles.relevant}>99% Relevant</span>
            {/* <span className={styles.maturity}>{+item.maturity < 12 ? 'PG' : item.maturity}</span> */}
          </div>
          <p className={styles.description}>{item.overview}</p>
          <div className={styles.evidenceTags}>
            <span>Explosive</span>
            <span>Violence</span>
            <span>Exciting</span>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}
