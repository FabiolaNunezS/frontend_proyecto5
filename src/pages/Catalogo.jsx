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

// <div className="container text-center">
//   <h1 className="mb-4">Conoce nuestros productos</h1>
//   <div className="row justify-content-center">
//     {" "}
//     {/* Agrega justify-content-center para centrar */}
//     <div className="col-md-6 col-lg-4 mb-4">
//       {" "}
//       {/* Cambios en las clases col-md-6 col-lg-4 */}
//       <div className="card">
//         <Link to="/producto/1">
//           <img
//             src="../images/pink.jpeg"
//             className="card-img-top menu-image"
//             alt="vaso"
//           />
//         </Link>
//         <div className="card-body">
//           <h3 className="card-title">HSB PINK</h3>
//           <p className="card-text">$29,990</p>
//         </div>
//       </div>
//     </div>
//     <div className="col-md-6 col-lg-4 mb-4">
//       <div className="card">
//         <Link to="/producto/2">
//           <img
//             src="../images/pinkblack.jpeg"
//             className="card-img-top"
//             alt="vaso2"
//           />
//         </Link>
//         <div className="card-body">
//           <h3 className="card-title">HSB DUO</h3>
//           <p className="card-text">$49,990</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
