import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Catalogo = () => {
  const [first, setfirst] = useState(null);
  useEffect(() => {
    try {
      const obtenerProducto = async () => {
        const { data } = await axios.get("http://localhost:4000/products");
        setfirst(data);
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
        <div className="row justify-content-center">
          {first?.detail.map((el) => (
            <div key={el._id} className="col-md-6 col-lg-4 mb-4">
              <div className="col-md-12">
                <div className="card">
                  <Link to={`/dinamica/${el._id}`}>
                    <img
                      src={el.catalogo}
                      className="card-img-top menu-image"
                      alt="vaso"
                    />
                  </Link>
                  <div className="card-body">
                    <h3 className="card-title">{el.productName}</h3>

                    <p className="card-text">${el.precio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
