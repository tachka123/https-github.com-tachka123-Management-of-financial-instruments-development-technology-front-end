import React from "react";
import images_object from "../../assets/images";
import "./s.css";

const Logo = () => {
  return (
    <div>
      <img className={"logoImg"} src={images_object.logo} alt={"logo"} />
    </div>
  );
};

export default Logo;