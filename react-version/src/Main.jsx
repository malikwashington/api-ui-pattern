import React from 'react'

function Main({text}) {
  let arr =
    [text["Biology"], text["Physical Description"],
      text["Habitat"], text["Location"], text["Taste"],
      text["Texture"]]
  arr.forEach((array, index, arr) => {
    if (!array) arr.splice(index, 1)
  })

  let infoArray=arr.join(" ")
 
  return ( 
    <div className='info'>     
      {document.querySelector(".info").innerHTML=infoArray}
    </div>
  );
}

export default Main