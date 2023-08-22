import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Catalogo } from "../pages/Catalogo";
import { Usuario } from "../pages/Usuario";
import { Registro } from "../pages/Registro";
// import { ProtectedRoutes } from "./protectedRoutes";

export const MainRoutes = ({ setUser, user }) => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/reservas" element={<FormularioReservas />} />
        </Route> */}
        <Route path="/usuario" element={<Usuario setUser={setUser} />} />
        <Route path="/registrate" element={<Registro setUser={setUser} />} />
      </Routes>
    </div>
  );
};
