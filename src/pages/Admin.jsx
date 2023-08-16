import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Admin = ({ setUser }) => {
  const [formState, setFormState] = useState({
    correo: "",
    contrasena: "",
  });

  const navegar = useNavigate();

  const onChangeAdmin = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const submitFormulario = async (e) => {
    e.preventDefault();
    try {
      const credenciales = await signInWithEmailAndPassword(
        auth,
        formState.correo,
        formState.contrasena
      );
      console.log(credenciales);
      setUser(credenciales.user);
      toast.success("Login realizado");
      navegar("/reservas");
    } catch (error) {
      toast.error("Error de autenticacion");
    }
    // alert("login realizado");
  };

  return (
    <form onSubmit={submitFormulario} className="text-center">
      <h2 className="mb-3" style={{ fontFamily: "Roboto, sans-serif" }}>
        <span className="text-primary">
          Inicio de sesión / Administrador del sitio
        </span>
      </h2>
      <div className="form-group">
        <label htmlFor="correo">
          <strong>Correo electrónico</strong>
        </label>
        <input
          type="email"
          className="form-control"
          name="correo"
          value={formState.correo}
          onChange={onChangeAdmin}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="contrasena">
          <strong>Contraseña</strong>
        </label>
        <input
          type="password"
          className="form-control"
          name="contrasena"
          value={formState.contrasena}
          onChange={onChangeAdmin}
        />
      </div>
      <button type="submit" id="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
    </form>
  );
};
