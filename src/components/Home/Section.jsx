import React from "react";
//components
import Divider from "./Divider";
//css style
import "../../css/Home/Section.css";
function Section({ title, description, img, video, flipt }) {
  return (
    <section>
      <div className="content">
        <div className={`left_side ${flipt && "left_side_flept"}`}>
          <h1 className="title">{title}</h1>
          <h3 className="decription">{description}</h3>
        </div>
        <div className={`right_side ${flipt && "right_side_flept"}`}>
          <img src={`${img}`} alt="" />
          <div className="short_clip">
            {video && (
              <video muted autoPlay loop={true}>
                <source src={`${video}`} alt="video" type="video/mp4"></source>
              </video>
            )}
          </div>
        </div>
      </div>
      <Divider />
    </section>
  );
}

export default Section;
