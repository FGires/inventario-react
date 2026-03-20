import React, { useState } from "react";
import "./styles/styles.css";

// Componentes
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Inventario from "./components/Inventario";
import NuevoRegistro from "./components/NuevoRegistro";
import Reportes from "./components/Reportes";
import Configuracion from "./components/Configuracion";
import BottomNav from "./components/BottomNav";

function App() {
  // Estado global de navegación
  const [screen, setScreen] = useState("login");
  const [hayCambiosPendientes, setHayCambiosPendientes] = useState(false);

  // Función navegación
  const goTo = (id) => {
    setScreen(id);
  };

  // Logout
  const logout = () => {
    if (hayCambiosPendientes) {
      if (!window.confirm("Tienes cambios sin guardar. ¿Salir?")) return;
    } else {
      if (!window.confirm("¿Cerrar sesión?")) return;
    }

    setScreen("login");
    setHayCambiosPendientes(false);
  };

  return (
    <>
      {screen === "login" && <Login goTo={goTo} />}
      {screen === "dashboard" && <Dashboard goTo={goTo} logout={logout} />}
      {screen === "inventario" && <Inventario goTo={goTo} />}
      {screen === "nuevoRegistro" && <NuevoRegistro goTo={goTo} />}
      {screen === "reportes" && <Reportes />}
      {screen === "configuracion" && <Configuracion />}

      <BottomNav screen={screen} goTo={goTo} logout={logout} />
    </>
  );
}

export default App;