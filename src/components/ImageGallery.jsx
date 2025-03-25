import React from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onLike, onEdit, onDelete, onHide }) => {
  const breakpointColumns = {
    default: 3,
    768: 2,
    480: 1,
  };

  return (
    <Masonry breakpointCols={breakpointColumns} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {images.map((img, index) => (
        <ImageCard
          key={index}
          src={img.src}
          liked={img.liked}
          onLike={() => onLike(index)}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
          onHide={() => onHide(index)}
        />
      ))}
    </Masonry>
  );
};

export default ImageGallery;
