/*slint-diable react/prop-types */

import { useState } from "react";

export const ProductoDelCarrito = ({ producto, setCarritoDeCompras }) => {
  const [contador, setContador] = useState(producto.cantidad);
  console.log(producto.id);

  const aumentar = () => {
    setCarritoDeCompras((productos) => {
      const arregloProductos = productos.map((product) => {
        if (product.id === producto.id) {
          return {
            ...product,
            cantidad: contador + 1,
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
              cantidad: contador - 1,
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
      <p className="producto-titulo">{producto.titulo}</p>
      <h3>{producto.precio}</h3>
      <button onClick={disminuir}>-1</button>
      <p>{contador}</p>
      <button onClick={aumentar}>+1</button>
      <p>Precio total productos: {producto.precio * producto.cantidad}</p>
    </li>
  );
};
