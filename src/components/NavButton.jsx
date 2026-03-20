import React from "react";

function NavButton({ destino, goTo, logout, activo }) {
  const iconos = {
    dashboard: "home",
    inventario: "inventory_2",
    reportes: "bar_chart",
    configuracion: "settings",
    logout: "logout",
  };

  const textos = {
    dashboard: "Inicio",
    inventario: "Inventario",
    reportes: "Reportes",
    configuracion: "Config.",
    logout: "Salir",
  };

  const handleClick = () => {
    destino === "logout" ? logout() : goTo(destino);
  };

  return (
    <button
      className={`nav-btn ${activo ? "active" : ""} ${
        destino === "logout" ? "logout" : ""
      }`}
      onClick={handleClick}
    >
      <span className="material-icons">{iconos[destino]}</span>
      {textos[destino]}
    </button>
  );
}

export default NavButton;