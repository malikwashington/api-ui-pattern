import React from 'react'

function Title({name}) {

  let arr = name["Scientific Name"].split(" ");
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  let sciName = arr.join(" ")

  return (
    <div>
      <h2 className='title'> {name["Species Name"]
        ? name["Species Name"] : "Common Fish"}</h2>
      <h3 className='title'>
        {name["Scientific Name"]
          ? sciName
          : " "}
      </h3>
    </div>
  );
}

export default Title