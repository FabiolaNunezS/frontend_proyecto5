export const Principal = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="border p-4 d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <h1
                className="text-center font-weight-bold mb-3"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Te presentamos nuestros productos exclusivos.
              </h1>
              <p
                className="text-justify"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Estos vasos térmicos fueron diseñados especialmente para todo
                tipo de bebidas, en especial aquellas que quieras mantener a una
                temperatura adecuada para disfrutar.
              </p>
              <p
                className="text-justify"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Con este lujoso vaso, podrás mantener la temperatura de tu
                bebida por hasta 10 horas, así que ahora puedes disfrutar con
                tranquilidad en tus fiestas sin preocuparte de que se enfríe tu
                bebida.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="./images/presentacion.jpeg"
                alt="#"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
