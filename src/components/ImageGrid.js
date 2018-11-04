import React from "react";
import ImageItem from "./ImageItem";

const ImageGrid = props => {
  const images = props.images.hits;
  if (!images) {
    return <div>Loading...</div>;
  }


  return (
    <div className="grid">
      <div className="row mt-3">
        <ImageItem
          key={images[0].id}
          pageUrl={images[0].pageURL}
          webformatURL={images[0].webformatURL}
          tags={images[0].tags}
        />
        <ImageItem
          key={images[1].id}
          pageUrl={images[1].pageURL}
          webformatURL={images[1].webformatURL}
          tags={images[1].tags}
        />
        <ImageItem
          key={images[2].id}
          pageUrl={images[2].pageURL}
          webformatURL={images[2].webformatURL}
          tags={images[2].tags}
        />
      </div>
      <div className="row mt-3">
        <ImageItem
          key={images[3].id}
          pageUrl={images[3].pageURL}
          webformatURL={images[3].webformatURL}
          tags={images[3].tags}
        />
        <ImageItem
          key={images[4].id}
          pageUrl={images[4].pageURL}
          webformatURL={images[4].webformatURL}
          tags={images[4].tags}
        />
        <ImageItem
          key={images[5].id}
          pageUrl={images[5].pageURL}
          webformatURL={images[5].webformatURL}
          tags={images[5].tags}
        />
      </div>
      <div className="row mt-3 mb-5">
        <ImageItem
          key={images[6].id}
          pageUrl={images[6].pageURL}
          webformatURL={images[6].webformatURL}
          tags={images[6].tags}
        />
        <ImageItem
          key={images[7].id}
          pageUrl={images[7].pageURL}
          webformatURL={images[7].webformatURL}
          tags={images[7].tags}
        />
        <ImageItem
          key={images[8].id}
          pageUrl={images[8].pageURL}
          webformatURL={images[8].webformatURL}
          tags={images[8].tags}
        />
      </div>
    </div>
  )

}

export default ImageGrid;