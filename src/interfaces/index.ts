export type User = {
  id: number;
  name: string;
};

export type IUser = {
  uid: string;
  email: string;
};

export interface ISignIn {
  email: string;
  password: string;
}

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
  type: string;
  title: string;
  description: string;
  genre: string;
  maturity: string;
  slug: string;
}
