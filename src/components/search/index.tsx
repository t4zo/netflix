import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';

import styles from './search.module.scss';

interface Props {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Search({ searchTerm, setSearchTerm }: Props) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon} onClick={() => setSearchActive((searchActive) => !searchActive)}>
        <Image src='/images/icons/search.png' width={18} height={18} />
      </div>
      {
        <input
          type='text'
          placeholder='Search films and series'
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchActive ? { width: 200, visibility: 'visible', marginRight: 20 } : { width: 0, visibility: 'hidden', marginRight: 0 }}
        />
      }
    </div>
  );
}
