import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user/userContext";
import { types } from "../context/user/userReducer";

export const Registro = () => {
  const [, dispatch] = useContext(UserContext);

  const initialUser = {
    username: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  };

  const [formUser, setFormUser] = useState(initialUser);

  const handleChange = (e) => {
    setFormUser({
      ...formUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: types.setUserState,
      payload: formUser,
    });
    setFormUser(initialUser);
  };
  // toast.success("Registro realizado");

  return (
    <>
      <div className="container">
        <div className="card bg-light text-dark p-4 text-center">
          <h2 className="mb-4">Registrate</h2>
          <p className="mb-4">
            Al registrarte podras realizar tu compra y recibir nuestras
            novedades.
          </p>
          <form onSubmit={handleSubmit} id="registro">
            <div className="form-group row justify-content-center">
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Nombre
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="username"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Agregue su nombre"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Correo
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  id="email"
                  className="form-control mb-3"
                  name="email"
                  placeholder="email@mail.com"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Dirección
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="address"
                  className="form-control mb-3"
                  name="address"
                  placeholder="coloca tu direccion"
                  onChange={handleChange}
                  max="20"
                  min="2"
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label htmlFor="phone" className="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  id="phone"
                  className="form-control mb-3"
                  name="phone"
                  placeholder="+56912345678"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Contraseña
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="password"
                  className="form-control mb-3"
                  name="password"
                  placeholder="coloca tu contrasena"
                  onChange={handleChange}
                  max="20"
                  min="2"
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3 mt-3"
                  id="sumbit"
                >
                  Registrate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
