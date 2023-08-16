import React from "react";

export const Catalogo = () => {
  return (
    <div className="container text-center">
      <h1 className="mb-4 text-align-center">Conoce nuestros productos</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/pink.jpeg"
              className="card-img-top menu-image"
              alt="carne asada"
            />
            <div className="card-body">
              <h3 className="card-title">HSB Pink</h3>
              <p className="card-text">$29,990</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/pinkblack.jpeg"
              className="card-img-top"
              alt="ceviche"
            />
            <div className="card-body">
              <h3 className="card-title">2 HSB</h3>
              <p className="card-text">$59,990</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="../images/destapador.jpg"
              className="card-img-top"
              alt="vigoron"
            />
            <div className="card-body">
              <h3 className="card-title">destapador</h3>
              <p className="card-text">$8,990</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
