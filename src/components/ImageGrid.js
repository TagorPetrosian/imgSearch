import React from "react";
import ImageItem from "./ImageItem";

const ImageGrid = props => {
  const images = props.images.hits;
  if (!images) {
    return <div>Loading...</div>;
  }

  const imageItems = images.map(image => {
    return (
      <ImageItem
        key={image.id}
        pageUrl={image.pageURL}
        webformatURL={image.webformatURL}
        tags={image.tag}
      />
    );
  })

  return <div className="grid">{imageItems}</div>

}

export default ImageGrid;