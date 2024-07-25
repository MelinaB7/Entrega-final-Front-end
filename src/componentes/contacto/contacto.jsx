import React from "react";
import "./contacto.css";
import trabajo from "../../assets/imagenes/computadora2.png";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagenC1 from "../../assets/imagenes/imagenC1.png";
import imagenC2 from "../../assets/imagenes/imagenC2.png";
import imagenC3 from "../../assets/imagenes/imagenC3.png";

const Contacto = () => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={trabajo}
              alt="Imagen de contacto"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h2>SW</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Button
              as={Link}
              to="/nosotros"
              variant="primary"
              className="masInfo"
            >
              Más información
            </Button>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel fade interval={null}>
          <Carousel.Item>
            <img src={imagenC1} alt="computadora" className="d-block w-100" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={imagenC2} alt="computadora" className="d-block w-100" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={imagenC3} alt="computadora" className="d-block w-100" />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Contacto;

