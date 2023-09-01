import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductoDelCarrito } from "../components/ProductoDelCarrito";
import { CartContext } from "../context/carrito/cartContext";

export const Carrito = () => {
  const [carrito, dispatch] = useContext(CartContext);
  console.log(carrito);
  const [carritoDeCompras, setCarritoDeCompras] = useState(carrito.carrito);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    setPrecioTotal(
      carritoDeCompras.reduce((total, producto) => {
        return total + producto.precio * producto.quantity;
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
          {carritoDeCompras?.map((producto) => (
            <ProductoDelCarrito
              key={producto._id}
              producto={producto}
              setCarritoDeCompras={setCarritoDeCompras}
            />
          ))}
        </ul>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0" style={{ color: "black" }}>
            Precio Total: <span style={{ color: "blue" }}>${precioTotal}</span>
          </h2>
          <Link to="/carrito" className="btn btn-primary btn-sm">
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
