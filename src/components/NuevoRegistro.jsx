import React from "react";

function NuevoRegistro({ goTo }) {
  return (
    <section className="screen active">
      <header className="appbar orange">
        <h2>Nuevo Registro</h2>
      </header>

      <main className="form">
        <input type="text" placeholder="Producto" />
        <input type="number" placeholder="Cantidad" />
        <input type="text" placeholder="Categoría" />

        <button className="btn-primary" onClick={() => goTo("inventario")}>
          Guardar Registro
        </button>
      </main>
    </section>
  );
}

export default NuevoRegistro;