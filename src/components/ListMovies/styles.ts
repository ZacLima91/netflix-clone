import Slider from "react-slick";
import styled from "styled-components";

export const ListMoviesComponents = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const Carousel = styled(Slider)`
  .slick-slider {
    width: 100%;
  }

  .slick-list {
    width: 100%;
    margin: 3rem;
  }

  @media (max-width: 480px) {
    img{
      width: 80%;
      height: 30rem;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .slick-prev {
    left: 0px;
    transform: rotate(-135deg);
  }

  .slick-next {
    right: 0px;
    transform: rotate(45deg);
  }

  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
  }
`;
