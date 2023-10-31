import React, { useState, useMemo, useRef, useEffect } from "react";
import { images } from "../../constant";
import "./stack.css";

export const ImageStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const size = useMemo(() => images.length, []);
  const timer = useRef(null);
  const containerRef = useRef(null);

  const map = useMemo(() => {
    const map = new Map();
    const len = images.length;
    let i = len;

    if (len < activeIndex || activeIndex < 0)
      throw new Error("Invalid index set as active index");

    while (i > 0) {
      map.set((activeIndex + len - i) % len, --i);
    }

    return map;
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const { width } = container.getBoundingClientRect();
      setContainerWidth(width);
    };

    handler();

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    timer.current = setInterval(
      () => setActiveIndex((cur) => (cur + 1) % size),
      4000
    );

    return () => clearInterval(timer.current);
  }, [size]);

  const renderStack = images.map((image, i) => {
    const factor = size - 1 - map.get(i);
    const isPreviousActiveIndex = (activeIndex + size - 1) % size === i;

    return (
      <div
        className={`stacked-image ${
          isPreviousActiveIndex ? "previous-active" : ""
        }`}
        key={image}
        style={{
          bottom: `${0 - 0.09 * factor * containerWidth}px`,
          transform: `scale(${1 - 0.09 * factor})`,
          zIndex: `${map.get(i)}`,
          backgroundImage: `url(${image})`,
        }}
      />
    );
  });

  return (
    <div>
      <div className="stack-container" ref={containerRef}>
        {renderStack}
      </div>
    </div>
  );
};
