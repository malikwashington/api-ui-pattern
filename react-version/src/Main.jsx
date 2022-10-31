import React from 'react'

function Main({text, isLoaded}) {
  let arr =
    [text["Biology"], text["Physical Description"],
      text["Habitat"], text["Location"], text["Taste"],
      text["Texture"]]
  arr.forEach((array, index, arr) => {
    if (!array) arr.splice(index, 1)
  })

  let infoArray = arr.join(" ")
  
  if (infoArray == null) {
    return (
      <div>Loding...</div>
    )
  }
  
  return ( 
    <div id='info'>     
    {document.getElementById("info").innerHTML=infoArray}
    </div>
  );
}

export default Main