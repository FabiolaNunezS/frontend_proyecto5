import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = ({ user, setUser }) => {
  const navegador = useNavigate();
  const logOut = async () => {
    if (window.confirm("desea cerrar sesion")) {
      await signOut(auth);
      setUser(null);
      navegador("/");
    }
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
              {!user ? (
                <NavLink className="nav-link" to="/usuario">
                  Iniciar Sesion
                </NavLink>
              ) : (
                <Link className="nav-link" onClick={logOut}>
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
