import { useState } from "react";

export const Formulario = () => {
  const initialForm = {
    nombre: "",
    correo: "",
    dirección: "",
    telefono: "",
  };
  const [formState, setFormState] = useState(initialForm);

  const onChangeFormulario = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
    console.log(formState);
    console.log(target.value);
  };

  const submitFormulario = async (e) => {
    e.preventDefault();
    await db.collection("reservas").add(formState);
    setFormState(initialForm);
    toast.success("Reserva realizada");
  };

  return (
    <div className="container">
      <div className="card bg-light text-dark p-4 text-center">
        <h2 className="mb-4">Registrate</h2>
        <p className="mb-4">
          Al registrarte podras realizar tu compra y recibir nuestras novedades.
        </p>
        <form onSubmit={submitFormulario} id="formulario">
          <div className="form-group row justify-content-center">
            <label htmlFor="nombre" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control mb-3"
                name="nombre"
                placeholder="Agregue su nombre"
                value={formState.nombre}
                onChange={onChangeFormulario}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="correo" className="col-sm-2 col-form-label">
              Correo
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control mb-3"
                name="correo"
                placeholder="email@mail.com"
                value={formState.correo}
                onChange={onChangeFormulario}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="direccion" className="col-sm-2 col-form-label">
              Dirección
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control mb-3"
                name="direccion"
                placeholder="coloca tu direccion"
                value={formState.direccion}
                onChange={onChangeFormulario}
                max="20"
                min="2"
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <label htmlFor="telefono" className="col-sm-2 col-form-label">
              Teléfono
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control mb-3"
                name="telefono"
                placeholder="+56912345678"
                value={formState.telefono}
                onChange={onChangeFormulario}
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
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
