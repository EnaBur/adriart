import React from "react";
import video from "../assets/output.mp4";


const Video = () => {
  return (
    <div className="videoSection" id="video">
      <h2>ENHANCE YOUR EXPERIENCE WITH THE VIDEO</h2>
      <video controls width="70%" className="videoPlayer" src={video}></video>
      
    </div>
  );
};

export default Video;
