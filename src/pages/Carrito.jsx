import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductoDelCarrito } from "../components/ProductoDelCarrito";

const carritoInicial = [
  {
    titulo: "HSB PINK",
    precio: 29990,
    cantidad: 0,
    id: 1,
  },
  {
    titulo: "HSB DUO",
    precio: 49990,
    cantidad: 0,
    id: 2,
  },
  // ... Otros productos en el carrito
];

export const Carrito = () => {
  const navigate = useNavigate();

  const [carritoDeCompras, setCarritoDeCompras] = useState(carritoInicial);

  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(
      carritoDeCompras.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
      }, 0)
    );
  }, [carritoDeCompras]);

  const disminuir = () => {
    setContador((contador) => contador - 1);
  };

  return (
    <div className="container text-center">
      <div
        className="card carrito-card p-4 mt-4"
        style={{ background: "#f0f0f0", color: "blue" }}
      >
        <h1 className="mb-4" style={{ color: "black" }}>
          Mi Carrito de Compras
        </h1>
        <ul className="list-unstyled" style={{ color: "black" }}>
          {carritoDeCompras.map((producto) => (
            <ProductoDelCarrito
              key={producto.id}
              producto={producto}
              setCarritoDeCompras={setCarritoDeCompras}
            />
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0" style={{ color: "black" }}>
            Precio Total: <span style={{ color: "blue" }}>${precioTotal}</span>
          </h2>
          <Link
            to="/usuario"
            className="btn btn-primary btn-sm"
            onClick={() => navigate("/usuario")}
          >
            <img
              src="/images/carrito.png"
              alt="Carrito de Compras"
              className="shopping-cart-icon"
            />
            Pagar
          </Link>
        </div>
      </div>
    </div>
  );
};
