import React from "react";

const ImageItem = ({ pageUrl, webformatURL, tags }) => {
  return (
    <div className="col-md-4 grid-item"><a href={pageUrl}>
      <figure>
        <img src={webformatURL} alt={tags} className="img-responsive" />
      </figure>
      <figcaption className="caption">
        <i className="fas fa-link"></i></figcaption>
    </a></div>
  )
}

export default ImageItem;