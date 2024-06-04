import React from "react";
import { imagenmodal } from "../model/imagenModel";

export const ImageController: React.FC<imagenmodal> = ({
  src,
  alt,
  className,
}) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
};
