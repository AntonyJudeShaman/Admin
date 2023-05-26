import React from "react";
import picc from "./bgpic.png";

const Background = () => {
  return (
    <div className="">
      <img src={picc} style={{width:'100%'}} href='#card' useMap="map" class="object-fit-fill border rounded" alt="..." />
      
    </div>
  );
};

export default Background;
