import React from "react";

function Configuracion() {
  return (
    <section className="screen active">
      <header className="appbar blue">
        <h2>Configuración</h2>
      </header>

      <main className="list">
        <div className="list-item">
          <span className="material-icons">person</span>
          Gestión de Usuarios
        </div>

        <div className="divider"></div>

        <div className="list-item">
          <span className="material-icons">tune</span>
          Parámetros del Sistema
        </div>
      </main>
    </section>
  );
}

export default Configuracion;