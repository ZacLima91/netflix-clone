import React from "react";
import { Img } from "./styles";

interface ImageProps {
  src: string| undefined;
  alt: string;
  width?: number;
  height?: number;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
}) => {
  return <Img src={src} alt={alt} width={width} height={height} />;
};
