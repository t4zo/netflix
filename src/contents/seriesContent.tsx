import Card from 'components/card';
import { SERIES } from '../constants';
import { useContent } from 'hooks';
import { IMedia } from 'interfaces';
import React from 'react';

export default function SeriesContent() {
  const { series } = useContent(SERIES);
  return series.map((serie: IMedia) => <Card key={serie.id} item={serie} />);
}
