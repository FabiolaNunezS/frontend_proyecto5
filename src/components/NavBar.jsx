import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user/userContext";
import { types } from "../context/user/userReducer";

export const NavBar = () => {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: types.setLogout });
    localStorage.removeItem("userProfile");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info border-bottom border-bottom-dark mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand navbar-icon-link" to="/">
          <img src="./images/logo2.png" alt="Icono" className="navbar-icon" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalogo">
                Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Registrate">
                Registrate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/perfil">
                Perfil
              </NavLink>
            </li>
            <li className="nav-item">
              {!state?.user ? (
                <NavLink className="nav-link" to="/usuario">
                  Iniciar Sesion
                </NavLink>
              ) : (
                <Link className="nav-link" onClick={handleLogout}>
                  Cerrar Sesion
                </Link>
              )}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Carrito">
                Carrito
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
