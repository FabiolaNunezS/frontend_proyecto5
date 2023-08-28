import React from "react";
import { useParams, Link } from "react-router-dom";

export const DetalleProducto1 = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card product-card product-card-thick-border">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="../images/pink.jpeg"
                  className="card-img img-small"
                  alt="Hermoso vaso térmico"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">HSB PINK {id}</h2>
                  <p className="card-text">
                    Hermoso vaso térmico color rosado aperlado con brillitos, de
                    12 onz, puedes colocar cualquier tipo de bebida o envase y
                    no te volverás a preocupar de estar en una fiesta y que tu
                    bebida se caliente, tienes 10 horas para disfrutar sin
                    preocupaciones. Enviamos a todo Chile GRATIS.
                  </p>
                  <h3 className="price">$29,990</h3>
                  <Link to="/carrito" className="btn btn-primary btn-sm mt-3">
                    Agregar al carrito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
