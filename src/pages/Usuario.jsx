import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/user/userContext";
import { types } from "../context/user/userReducer";
import axios from "axios";
import jwt from "jwt-decode";

export const Usuario = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [, dispatch] = useContext(UserContext);
  const navigate = useNavigate();

  const initialUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const tokenDecodificado = jwt(data.token);
      console.log(tokenDecodificado);
      dispatch({
        type: types.setUserState,
        payload: tokenDecodificado,
      });
      window.alert("usuario logueado");
      setIsFetching(false);
      navigate("/");
      // setUser(initialUser);
    } catch (error) {
      window.alert("error al iniciar sesion");
      console.log(error);
      dispatch({
        type: types.setError,
        payload: error,
      });
      setIsFetching(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="text-center">
        <h2 className="mb-3" style={{ fontFamily: "Roboto, sans-serif" }}>
          <span className="text-primary">Inicio de sesión</span>
        </h2>
        <div className="form-group">
          <label htmlFor="email">
            <strong>Correo electrónico</strong>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">
            <strong>Contraseña</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          id="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={isFetching}
        >
          {isFetching ? "cargando..." : "Ingresar"}
          {/* Iniciar sesión */}
        </button>
      </form>
    </>
  );
};
