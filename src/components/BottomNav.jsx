import React from "react";
import NavButton from "./NavButton";

function BottomNav({ screen, goTo, logout }) {
  if (["login", "dashboard", "nuevoRegistro"].includes(screen)) {
    return null;
  }

  const reglas = {
    inventario: ["dashboard", "reportes", "configuracion", "logout"],
    reportes: ["dashboard", "inventario", "configuracion", "logout"],
    configuracion: ["dashboard", "inventario", "reportes", "logout"],
  };

  return (
    <nav className="bottom-nav">
      {reglas[screen].map((item) => (
        <NavButton
          key={item}
          destino={item}
          goTo={goTo}
          logout={logout}
          activo={item === screen}
        />
      ))}
    </nav>
  );
}

export default BottomNav;