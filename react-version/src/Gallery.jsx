import React from 'react'

function Gallery(img, feesh, index, setIndex) {

   const increase = () =>  {
    setIndex(index + 1);
    if (index >= feesh.length) {
      setIndex(0);
    }
  }

  const decrease = () => {
    if ((index == 0)) {
      setIndex(feesh.length)
    }
    setIndex(index - 1)
  }
  

  return (
    <div className="gallery-container">
      <div className="prev" onClick={decrease}>
        -
      </div>
      <img
        src={
          img.img[0].src
            ? img.img[0].src
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyd-dFzGGRcQ6pgyxw52jHmL3IxfFxosnOA&usqp=CAU"
        }
        alt={img.img[0].alt ? img.img[0].alt : "Image Not Found"}
      />
    </div>
  );
}

export default Gallery