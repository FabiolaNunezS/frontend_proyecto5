import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { carroTypes } from "../context/carrito/cartReducer";
import { CartContext } from "../context/carrito/cartContext";

export const DetalleProducto1 = () => {
  const params = useParams();
  const { id } = params;
  const [first, setfirst] = useState(null);
  const [carrito, dispatch] = useContext(CartContext);

  const agregarAlCarrito = () => {
    dispatch({
      type: carroTypes.setCarroState,
      payload: first,
    });
  };

  useEffect(() => {
    try {
      const obtenerProducto = async () => {
        const { data } = await axios.get(
          `http://localhost:4000/products/dinamica/${id}`
        );
        setfirst(data.detail);
        console.log(first);
      };
      obtenerProducto();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card product-card product-card-thick-border">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={first?.imagen}
                    className="card-img img-small"
                    alt="Hermoso vaso térmico"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{first?.productName}</h2>
                    <p className="card-text">{first?.descripcion}</p>
                    <h3 className="price">${first?.precio}</h3>
                    <Link
                      to="/carrito"
                      className="btn btn-primary btn-sm mt-3"
                      onClick={agregarAlCarrito}
                    >
                      Agregar al carrito
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ul className="rowProduct">
        {first?.detail.map((elemeto) => (
          <Link
          to={`/dinamica/${elemeto._id}`}
          className="listD"
          key={elemeto._id}
          >
          <li className="divCproduc">
          <div className="divCproducimg">
          <img src="../images/pink.jpeg" />
              </div>
              
              <p className="nombreProduct">{elemeto.productName}</p>
              
              <p> ${elemeto.stock}</p>
              
              <button className="btnAgregar" type="submit">
                Agregar al Carrito
              </button>
            </li>
          </Link>
        ))}
      </ul> */}

        {/* {JSON.stringify(first)} */}

        {/* <div className="row">
          {first?.detail.map((el) => (
            <div key={el._id} className="col-md-12">
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
                      <h2 className="card-title">{el.productName}</h2>
                      <p>{el.descripcion}</p>
                      <h3 className="price">${el.precio}</h3>
                      <Link
                        to={`/dinamica/${el._id}`}
                        className="btn btn-primary btn-sm mt-3"
                        // onClick={agregarAlCarrito}
                      >
                        Agregar al carrito
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};
