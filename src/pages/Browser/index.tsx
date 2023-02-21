import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../Api";
import { Movie, User } from "../../Api/types";
import { BrowserHeader } from "../../components/BrowserHeader";
import { Footer } from "../../components/Footer";
import { Image } from "../../components/Image";
import { MovieList } from "../../components/ListMovies";
import {
  BrowserComponents,
  BrowserContentMovie,
  DetailsMovie,
  PosterMovie,
} from "./styles";

export const Browser = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>([]);
  const [user, setUser] = useState<User | undefined>();
  const { id } = useParams();

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await api.getMovies();
      setMovies(response);
    };
    getAllMovies();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const response = await api.getUserId(id);
      console.log(response);
      setUser(response);
    };
    getUser();
  }, []);

  const movie = movies?.[5];

  const bg = movie?.imgFullScreen;

  const bgStyle = bg ? `url(${bg})` : "url('')";

  return (
    <>
      <BrowserHeader img={user?.img} name={user?.userName} />
      <BrowserComponents bg={bgStyle}>
        <BrowserContentMovie>
          <DetailsMovie>
            <h1>{movie?.name}</h1>
            <p>{movie?.description}</p>
          </DetailsMovie>
          <PosterMovie>
            <Image src={movie?.imgUrl} alt={""} width={200} height={300} />
          </PosterMovie>
        </BrowserContentMovie>
      <MovieList />
      <Footer/>
      </BrowserComponents>
    </>
  );
};
