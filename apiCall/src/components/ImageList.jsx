import React from "react";
import ImageItem from "./ImageItem";
import "../App.css"

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem image={image} key={index} />;
      })}
    </div>
  );
}

export default ImageList;
