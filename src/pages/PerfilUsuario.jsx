import { useContext } from "react";
import { UserContext } from "../context/user/userContext";

export const PerfilUsuario = () => {
  const [user] = useContext(UserContext);

  console.log(user);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border border-3 border-secondary">
            <div className="card-header text-center">
              <h1 style={{ textTransform: "uppercase", fontSize: "24px" }}>
                Perfil de Usuario
              </h1>
            </div>
            <div className="card-body">
              <h2
                className="card-title text-center"
                style={{ fontSize: "18px" }}
              >
                {user && user.user.username}
              </h2>
              <p className="card-text text-center">
                Correo: {user && user.user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
