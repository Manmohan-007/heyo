import React from "react";
import { imagesCrousel } from "../../constant";
import "./crousel.css";

export const Crousel = () => {
  const crouselData = imagesCrousel.map((i, idx) => {
    return <img src={i} alt={idx.toString()} />;
  });

  return (
    <div>
      <div class="container">
        <div class="scroll-parent">
          <div class="scroll-element primary">{crouselData}</div>
          <div class="scroll-element secondary">{crouselData}</div>
        </div>
      </div>
    </div>
  );
};
