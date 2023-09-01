/*slint-diable react/prop-types */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export const ProductoDelCarrito = ({ producto, setCarritoDeCompras }) => {
  const [contador, setContador] = useState(producto.quantity);

  const aumentar = () => {
    setCarritoDeCompras((productos) => {
      const arregloProductos = productos.map((product) => {
        if (product.id === producto.id) {
          return {
            ...product,
            quantity: contador + 1,
          };
        } else {
          return product;
        }
      });
      return arregloProductos;
    });
    setContador(contador + 1);
  };

  const disminuir = () => {
    if (contador > 0) {
      setCarritoDeCompras((productos) => {
        const arregloProductos = productos.map((product) => {
          if (product.id === producto.id) {
            return {
              ...product,
              quantity: contador - 1,
            };
          } else {
            return product;
          }
        });
        return arregloProductos;
      });
      setContador(contador - 1);
    }
  };

  return (
    <li>
      <div
        className="producto-container"
        style={{
          marginBottom: "10px",
          background: "lightblue",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <div
          className="producto-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="producto-titulo">{producto.productName}</p>
            <h3>${producto.precio}</h3>
          </div>
          <div className="btn-container">
            <button className="btn-icon" onClick={disminuir}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <p>{contador}</p>
            <button className="btn-icon" onClick={aumentar}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <p>Precio total productos: ${producto.precio * contador}</p>
      </div>
    </li>
  );
};
