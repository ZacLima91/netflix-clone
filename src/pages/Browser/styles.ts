import styled from "styled-components";

export const BrowserComponents = styled.div<{ bg: string }>`
  background-image: ${(props) => props.bg};
  background-size: cover;
  height: 100%;
`;

export const BrowserContentMovie = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const DetailsMovie = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 2rem;
`;

export const PosterMovie = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
