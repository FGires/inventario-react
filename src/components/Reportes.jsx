import React from "react";

function Reportes() {
  return (
    <section className="screen active">
      <header className="appbar orange">
        <h2>Reportes</h2>
      </header>

      <main className="list">
        <div className="list-item">
          <span className="material-icons">storage</span>
          Reporte de Inventario Total
        </div>

        <div className="list-item">
          <span className="material-icons">swap_vert</span>
          Reporte de Movimientos
        </div>

        <div className="list-item">
          <span className="material-icons">warning</span>
          Alertas de Bajo Stock
        </div>
      </main>
    </section>
  );
}

export default Reportes;