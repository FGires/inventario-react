import React from "react";

function Inventario({ goTo }) {
  return (
    <section className="screen active">
      <header className="appbar orange">
        <h2>Gestión de Inventarios</h2>
      </header>

      <main className="list">
        <div className="list-item">
          <span className="material-icons">checkroom</span>
          <div>
            <strong>Camisa azul talla M</strong>
            <p>Stock: 25 unidades</p>
          </div>
        </div>

        <div className="list-item">
          <span className="material-icons">checkroom</span>
          <div>
            <strong>Pantalón negro talla 32</strong>
            <p>Stock: 40 unidades</p>
          </div>
        </div>
      </main>

      <button className="fab" onClick={() => goTo("nuevoRegistro")}>
        <span className="material-icons">add</span>
        Nuevo Registro
      </button>
    </section>
  );
}

export default Inventario;