import React from "react";
import { images } from "../../constant";
import "./newscroll.css";

export const ScrollStack = () => {
  const renderStack = images.map((i, idx) => {
    return (
      <div className="scroll-img-container">
        <img src={i} alt={idx} />
      </div>
    );
  });

  return <div className="new-scroll-container">{renderStack}</div>;
};
