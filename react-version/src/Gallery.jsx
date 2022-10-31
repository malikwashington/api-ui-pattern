import React from "react";

function Gallery(img, feesh, index, setIndex) {
  const increase = () => {
    setIndex(index + 1);
    if (index >= feesh.length) {
      setIndex(0);
    }
  };

  const decrease = () => {
    if (index == 0) {
      setIndex(feesh.length);
    }
    setIndex(index - 1);
  };

  let pic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyd-dFzGGRcQ6pgyxw52jHmL3IxfFxosnOA&usqp=CAU";
  let alt = "not found";

  if (img) pic = img.img[0].src;
  return (
    <div className="gallery-container">
      <div className="prev" onClick={decrease}>
        -
      </div>
      <img src={pic} alt={alt} />
    </div>
  );
}

export default Gallery;
