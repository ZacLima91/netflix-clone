import styled from "styled-components";

export const Img = styled.img<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;