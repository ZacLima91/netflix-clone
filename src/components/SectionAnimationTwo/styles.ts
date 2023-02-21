import styled from "styled-components";

export const SectionComponentAnimationTwo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;

  .content-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 20rem;
  }

  .content-text {
    width: 50%;
    
  }
  .content-text h1{
    font-size: 2rem;
  }

  .content-text h2{
    font-size: 1.2rem;
  }

  .content-video {
    width: 50%;
  }
  .content-video {
    position: relative;
    height: 20rem;
  }

  .content-video img {
    position: absolute;
    z-index: 1;
    height: 100%;
  }

  .content-video video {
    position: relative;
    z-index: 0;
    height: 9.6rem;
    top: 2rem;
    left: 5rem;
  }
`;
