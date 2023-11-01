import { imagesCrousel } from "../../constant";
import "./crousel.css";

export const Crousel = () => {
  return (
    <div className="wrapper">
      <div className="horizontal-scroll-wrapper">
        {imagesCrousel.map((image, idx) => (
          <img key={idx} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};
