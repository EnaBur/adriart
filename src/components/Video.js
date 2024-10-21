import React from "react";
import video from "../assets/VillaAdriart_v1.mp4";
import video2 from "../assets/VillaAdriart_v2.mp4";


const Video = () => {
  return (
    <div className="videoSection" id="video">
      <h2>CHECK OUR VIDEOS FOR A BETTER EXPERIENCE</h2>
      <video controls width="70%" className="videoPlayer" src={video}></video>
      <video controls width="70%" className="videoPlayer" src={video2}></video>
    </div>
  );
};

export default Video;
