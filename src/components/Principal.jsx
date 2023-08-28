import React from "react";
import { Link } from "react-router-dom";

export const Principal = () => {
  return (
    <div className="container mt-4">
      <div className="card bg-light">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <h1
                className="text-center font-weight-bold mb-3"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Te presentamos nuestros productos exclusivos.
              </h1>
              <p
                className="text-justify"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Estos vasos térmicos fueron diseñados especialmente para todo
                tipo de bebidas, en especial aquellas que quieras mantener a una
                temperatura adecuada para disfrutar.
              </p>
              <p
                className="text-justify"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Con este lujoso vaso, podrás mantener la temperatura de tu
                bebida por hasta 10 horas, así que ahora puedes disfrutar con
                tranquilidad en tus fiestas sin preocuparte de que se enfríe tu
                bebida.
              </p>
              <div className="d-flex justify-content-center">
                <Link to="/catalogo" className="btn btn-primary">
                  Ver Catálogo
                </Link>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/presentacion.jpeg"
                alt="restaurante"
                className="img-fluid rounded smaller-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
