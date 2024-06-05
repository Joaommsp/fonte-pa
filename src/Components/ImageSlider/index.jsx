import { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import { ImageSliderElement } from "./styles";

function ImageSlider() {
  const [imageUrl, setImageUrl] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const images = [
    {
      original:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      original:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      original:
        "https://images.unsplash.com/photo-1585640120739-40eccbcc0da2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const timeTochangeImage = setInterval(() => {
      setArrayIndex((prevIndex) => (prevIndex + 1) % images.length);
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 200);
    }, 7000);

    return () => clearInterval(timeTochangeImage);
  }, []);
  useEffect(() => {
    setImageUrl(images[arrayIndex].original);
  }, [arrayIndex]);

  return (
    <ImageSliderElement>
      <div className="coverImage"></div>
      <img
        src={imageUrl}
        alt=""
        className={visible ? "fade-in image" : "fade-out image"}
      />
    </ImageSliderElement>
  );
}

export default ImageSlider;
