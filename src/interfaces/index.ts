// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export interface IFaqs {
  id: number;
  header: string;
  body: string;
}

export interface IJumbotron {
  id: number;
  title: string;
  subTitle: string;
  image: IJumbotronImage;
}

export interface IJumbotronImage {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export interface IMedia {
  id: string;
  title: string;
  description: string;
  genre: string;
  maturity: string;
  slug: string;
}
