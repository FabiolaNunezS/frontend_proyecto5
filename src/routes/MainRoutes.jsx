import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Catalogo } from "../pages/Catalogo";
import { Usuario } from "../pages/Usuario";
import { Registro } from "../pages/Registro";
import { Carrito } from "../pages/Carrito";
import { DetalleProducto1 } from "../pages/DetalleProducto1";

export const MainRoutes = ({ setUser, user }) => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito setUser={setUser} />} />
        <Route path="/usuario" element={<Usuario setUser={setUser} />} />
        <Route path="/registrate" element={<Registro setUser={setUser} />} />
        <Route
          path="/dinamica/:id"
          element={<DetalleProducto1 setUser={setUser} />}
        />
        {/* <Route
          path="/dinamica/:id"
          element={<DetalleProducto2 setUser={setUser} />}
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
