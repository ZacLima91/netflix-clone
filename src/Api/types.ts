export type Movie = {
  image: string | undefined;
  id?: string;
  name: string;
  description: string;
  imgUrl: string;
  imgFullScreen: string;
  trailer: string;
  year: number;
};

export type User = {
  id?: string;
  userName: string;
  email: string;
  img: string;
};
