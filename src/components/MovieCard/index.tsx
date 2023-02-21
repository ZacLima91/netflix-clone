import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Image } from "../Image";

interface MoviePosterListProps {
  posters: string[];
}

 const MovieCard: React.FC<MoviePosterListProps> = ({ posters }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
        </div>
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
