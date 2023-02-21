import { useEffect, useState } from "react";
import { api } from "../../Api/index";
import { Movie } from "../../Api/types";
import { Image } from "../Image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, ListMoviesComponents } from "./styles";
export const MovieList = () => {
  const [items, setItems] = useState<Movie[] | undefined>([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await api.getMovies();
        setItems(response);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <ListMoviesComponents>
      <Carousel {...settings}>
        {items?.map((item) => (
          <div key={item.id}>
            <Image src={item.imgUrl} alt={item.name} height={300} width={200} />
          </div>
        ))}
      </Carousel>
    </ListMoviesComponents>
  );
};
