import "./ImageDogs.css";

import { useEffect, useState } from "react";

const ImageDogs = ({ imageDogs, limit = "5" }) => {
  const [imageLimit, setImageLimit] = useState(parseInt(limit));
  const [numberElements, setNumberElements] = useState([0, imageLimit]);
  const [filteredImages, setFilteredImages] = useState([]);
  const numberDogs = imageDogs.length;

  useEffect(() => {
    setNumberElements([0, imageLimit]);
    setFilteredImages(imageDogs.slice(numberElements[0], numberElements[1]));
  }, [imageDogs]);

  useEffect(() => {
    setFilteredImages(imageDogs.slice(numberElements[0], numberElements[1]));
  }, [numberElements]);

  useEffect(() => {
    setImageLimit(parseInt(limit));
    setNumberElements([0, imageLimit]);
  }, [limit, imageLimit]);

  const nextPage = () => {
    let [startElement, endElement] = numberElements;
    setNumberElements([startElement + imageLimit, endElement + imageLimit]);
  };

  const previousPage = () => {
    let [startElement, endElement] = numberElements;
    setNumberElements([startElement - imageLimit, endElement - imageLimit]);
  };

  return (
    <div className="wrapper_images">
      <div className="container-results">
        <h2>Resultados: {numberDogs}</h2>
      </div>
      <div className="images">
        {filteredImages.map((image, index) => {
          return (
            <a
              href={image}
              target="_blank"
              rel="noreferrer"
              key={numberElements[0] + index}
            >
              <img src={image} alt="Dog" />
            </a>
          );
        })}
      </div>
      <div className="container-buttons">
        <button
          disabled={numberElements[0] <= 0}
          onClick={() => previousPage()}
        >
          -
        </button>
        <button
          disabled={numberDogs <= numberElements[1]}
          onClick={() => nextPage()}
        >
          +
        </button>
      </div>
      <div className="container-now">
        Viendo del {numberElements[0] + 1} al{" "}
        {numberDogs <= numberElements[1] ? numberDogs : numberElements[1]}
      </div>
    </div>
  );
};

export default ImageDogs;
