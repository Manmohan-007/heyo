import React from "react";
import { Crousel } from "./crousel/crousel";
import { ImageStack } from "./image-stack/stack";

export const Body = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="don-t-wait">
          <div className="group-2">
            <div className="text-wrapper-3">Don’t Wait</div>
            <div className="text-wrapper-4">Come join us</div>
          </div>
          <p className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet consectetur. Venenatis potenti aliquam
            etiam turpis non. Et ut dictum posuere tincidunt. Nisi varius
            iaculis enim nisi nibh vitae arcu. Varius pretium egestas fringilla
            facilisis nunc volutpat ipsum leo in. Egestas ipsum gravida enim at.
            <br />
            Cursus amet id pellentesque nibh ultrices at ante convallis
            molestie. Adipiscing suscipit non id odio metus sit et aenean. Et
            interdum montes facilisi cursus sed iaculis sed. Cursus elit fames
            scelerisque gravida sit tincidunt erat. Eget mauris fermentum
            tincidunt aliquam volutpat. Vehicula ut phasellus etiam duis sapien
            nec egestas. Ipsum in aenean morbi a et consequat eros lacus
            scelerisque. Tincidunt arcu donec molestie morbi nullam. Nisl magna.
          </p>
          <div className="div-wrapper">
            <div className="text-wrapper-5">Register Now</div>
          </div>
        </div>
        <div className="carousel-horizontal">
          <Crousel />

          <div className="group-3">
            <div className="text-wrapper-3">A Journey</div>
            <div className="text-wrapper-9">of A Lifetime</div>
          </div>
          <div className="group-4">
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="rectangle-wrapper">
              <div className="rectangle-2" />
            </div>
          </div>
        </div>

        <div className="overlap-2">
          <div className="banner">
            <div className="overlap-3">
              {/* <Frame className="button" property1="default" /> */}
              <p className="p">
                We are Heyo. We take you the space, register now to see how!
              </p>
              <div className="text-wrapper-10">Welcome to Heyo</div>
              <ImageStack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
