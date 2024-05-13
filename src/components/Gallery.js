import React, { useState } from "react";
import imagesExport from "../data.js";
import Popup from "reactjs-popup";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeImageFull, setActiveImageFull] = useState(null);
  const images_full = imagesExport();
  const images = imagesExport().slice(0, 6);

  const handleImageClick = (index) => {
    setActiveImage(index);
  };

  const handleImageClickFull = (index) => {
    setActiveImageFull(index);
  };

  const handleNext = () => {
    setActiveImageFull((prevIndex) =>
      prevIndex === images_full.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveImageFull((prevIndex) =>
      prevIndex === 0 ? images_full.length - 1 : prevIndex - 1
    );
  };

  const handleClose = () => {
    setActiveImageFull(null);
  };

  const Modal = () => (
    <Popup trigger={<button className="button-23"> VIEW ALL </button>} modal>
      <div className="gallery-popup">
        {activeImageFull !== null && (
          <div>
            <div
              style={{
                backgroundImage: `url('${images_full[activeImageFull].image}')`,
              }}
            ></div>
          </div>
        )}
        <div className="gallery-full" id="gallery-all">
          {images_full.map((item, index) => (
            <div
              key={index}
              className={`gallery-full-image`}
              style={{ backgroundImage: `url('${item.image}')` }}
              onClick={() => handleImageClickFull(index)}
            ></div>
          ))}
        </div>
      </div>
    </Popup>
  );

  const SlideshowPopup = ({ index }) => (
    <Popup
      open={activeImageFull !== null}
      onClose={handleClose}
      closeOnDocumentClick={true}
    >
      <div className="slideshow-popup">
        <div className="close">
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="fullImageDiv">
          <button className="prev button-23" onClick={handlePrev}>
            ❮
          </button>
          <div
            className="full-image"
            style={{
              backgroundImage: `url('${images_full[index].image}')`,
            }}
          ></div>
          <button className="next button-23" onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
    </Popup>
  );

  return (
    <div className="gallerySection">
      <h2>GALLERY</h2>
      <div className="galery-body" id="gallery">
        {images.map((item, index) => (
          <div
            key={index}
            className={`galery ${activeImage === index ? "active" : ""}`}
            style={{ backgroundImage: `url('${item.image}')` }}
            onClick={() => handleImageClick(index)}
          ></div>
        ))}
      </div>
      <Modal />
      {activeImageFull !== null && <SlideshowPopup index={activeImageFull} />}
    </div>
  );
};

export default Gallery;
