import React, { useState } from "react";

const USER_VALIDO = "admin";
const PASS_VALIDA = "1234";

function Login({ goTo }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === USER_VALIDO && pass === PASS_VALIDA) {
      goTo("dashboard");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <section className="screen active">
      <div className="login-container">
        <h2>Inventario</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </section>
  );
}

export default Login;