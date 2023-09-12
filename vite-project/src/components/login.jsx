import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";

const Login = ({ apiUrl }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    axios
      .post(apiUrl, data)
      .then((response) => {
        if (response.status === 200) {
          // El inicio de sesión se realizó correctamente
          setError(null);
          setResponse(response.data);
        } else {
          // El inicio de sesión falló
          setError(new Error(response.data.error));
        }
      })
      .catch((error) => {
        // Ocurrió un error inesperado
        setError(error.message);
      });
  };

  return (
    <form  onSubmit={handleSubmit} className="login-form">
      <label htmlFor="username">Usuario</label>
      <input
        required
        type="text"
        id="username"
        placeholder="Tu nombre de usuario"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        required
        type="password"
        id="password"
        placeholder="Tu contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
      { response && <p className={response.message} >{response.message}</p>}
    </form>
  );
};

export default Login;