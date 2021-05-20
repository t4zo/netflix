import { useContext, useEffect } from 'react';
// import styles from './card.module.scss';

import FeatureContext from 'contexts/featureContext';
import { IMedia } from 'interfaces';

interface Props {
  item: IMedia;
}

export default function Card({ item }: Props) {
  const { showFeature, setShowFeature, setItemFeature } = useContext(FeatureContext);
  // const { showFeature, setShowFeature, itemFeature, setItemFeature } = useContext(FeatureContext);

  useEffect(() => {
    setShowFeature(true);
  }, []);

  console.log(showFeature);

  return (
    <div
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}>
      {item.title}
    </div>
  );
}
