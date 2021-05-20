import Card from 'components/card';
import { FILMS } from '../constants';
import { useContent } from 'hooks';
import { IMedia } from 'interfaces';
import React from 'react';

export default function FilmsContent() {
  const { films } = useContent(FILMS);
  return films.map((film: IMedia) => <Card key={film.id} item={film} />);
}
