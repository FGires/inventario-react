import React, { useState } from "react";

// const USER_VALIDO = "admin";
// const PASS_VALIDA = "1234";

function Login({ goTo }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");


// 🔐 TODO: Implementar autenticación real (backend / Firebase)
// Actualmente el acceso es directo para facilitar desarrollo

//if (user === USER_VALIDO && pass === PASS_VALIDA) {
//  goTo("dashboard");
//    } else {
//    alert("Usuario o contraseña incorrectos");
//    }

  const handleLogin = () => {
    // 🚀 Acceso directo temporal (sin validación)
    goTo("dashboard");
  };

  return (
    <section id="login" className="screen active">
    <div className="login-container">
        <h2>Inventario</h2>
        <div className="login-logo"></div>

        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
        }}
        >
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

        <button className="btn-primary" type="submit">
            Iniciar Sesión
        </button>
        </form>
    </div>
    </section>
  );
}

export default Login;