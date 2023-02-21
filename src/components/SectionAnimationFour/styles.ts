import styled from "styled-components";

export const SectionComponentAnimationFour = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
  

  .content-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;

    @media (max-width: 950px) {
      flex-direction: column;
      width: 100%;

      .content-video {
        width: 80%;
      }

      .content-video img {
        position: absolute;
      }
    }
  }

  .content-text {
    width: 50%;
  }

  .content-text h1 {
    font-size: 2rem;
  }

  .content-text h2 {
    font-size: 1.2rem;
  }

  .content-video {
    width: 50%;
    position: relative;
    height: 20rem;
  }

  .content-video img {
    height: 100%;
  }

  .story-card-animation-four {
    width: 300px;
    height: 80px;
    position: absolute;
    background-color: #fff;
    top: 14rem;
    left: 4rem;
    border-radius: 10px;
    background-color: #000;
    border: 2px solid #333;
    padding: 10px;
    display: flex;

    @media (max-width: 950px) {
      position: absolute;
      right: 0rem;
    }
  }

  .card-animationfour-img {
    width: 20%;
    height: 100%;
  }

  .card-animationfour-txt {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 0.8rem;
  }

  .card-animationfour-txt p {
    color: #0071e9;
  }

  .card-animationfour-gif {
    width: 20%;
    height: 100%;
  }
`;
