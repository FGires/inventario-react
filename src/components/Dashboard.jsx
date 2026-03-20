import React from "react";

function Dashboard({ goTo, logout }) {
  return (
    <section className="screen active">
      <header className="header">
        <span className="material-icons">checkroom</span>
        <h1>Incolnova SAS</h1>
      </header>

      <main className="dashboard-content">
        <button className="card orange" onClick={() => goTo("inventario")}>
          <span className="material-icons">inventory_2</span>
          Gestión de Inventarios
        </button>

        <button className="card blue" onClick={() => goTo("reportes")}>
          <span className="material-icons">bar_chart</span>
          Reportes
        </button>

        <button className="card light" onClick={() => goTo("configuracion")}>
          <span className="material-icons">settings</span>
          Configuración
        </button>

        <button className="card red" onClick={logout}>
          <span className="material-icons">logout</span>
          Salir
        </button>
      </main>
    </section>
  );
}

export default Dashboard;