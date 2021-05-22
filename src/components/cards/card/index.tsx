import { useContext, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

import FeatureContext from 'contexts/featureContext';
import { IMedia } from 'interfaces';

interface Props {
  item: IMedia;
}

export default function Card({ item }: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const { itemFeature, setItemFeature } = useContext(FeatureContext);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={styles.card}
      onMouseOver={() => {
        setItemFeature(item);
        // if (containerRef.current) {
        // containerRef.current.style.height = '418px';
        // containerRef.current.style.width = '440px';
        // containerRef.current.style.top = '745px';
        // containerRef.current.style.left = '583px';
        // containerRef.current.style.transformOrigin = 'center center';
        // containerRef.current.style.transform = 'none';
        // containerRef.current.style.zIndex = '3';
        // containerRef.current.style.opacity = '1';
        // containerRef.current.style.boxShadow = 'rgb(0 0 0 / 75%) 0px 3px 10px';
        // }
        // if (imageRef.current) {
        //   // Image
        //   imageRef.current.style.borderBottomLeftRadius = '0';
        //   imageRef.current.style.borderBottomRightRadius = '0';
        // }
      }}>
      <div className={styles.image} ref={imageRef}>
        <Image src={`/images/${item.type}/${item.genre}/${item.slug}/small.jpg`} width={293} height={165} layout='fixed' />
      </div>
      {itemFeature?.id === item.id && (
        <div className={styles.info}>
          <div className={styles.actions}>
            <span className={styles.actionItem}>1</span>
            <span className={styles.actionItem}>2</span>
            <span className={styles.actionItem}>3</span>
            <span className={styles.actionItem}>4</span>
            <span className={styles.actionItemReadMore} onClick={() => setIsReadMoreOpen(isReadMoreOpen => !isReadMoreOpen)}>
              5
            </span>
          </div>
          {isReadMoreOpen && (
            <div className={styles.readMore}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          )}
          <div className={styles.metaData}>
            <span className={styles.relevant}>99% Relevant</span>
            <span className={styles.maturity}>{+item.maturity < 12 ? 'PG' : item.maturity}</span>
          </div>
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
