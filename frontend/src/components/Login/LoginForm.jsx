import React, { useState } from "react";

// interface Props {
//   title: string;
//   welcomeText: string;
// }

// interface User {
//   email: string;
//   password: string;
// }

const users = [
  {
    email: "abi@example.com",
    password: "123456",
  },
  {
    email: "janedoe@example.com",
    password: "password",
  },
  {
    email: "bobsmith@example.com",
    password: "qwerty",
  },
];

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      console.log("Login successful!");
      alert('Bienvenido')
    } else {
      console.log("Email or password is incorrect.");
      alert('Correo o contraseña incorrecta')
    }
  };


  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-3xl font-medium mb-4">Iniciar Sesión</h2>
      <p className="text-gray-600 mb-8">Bienvenido</p>

      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Email/Username
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
            Recuperar Contraseña
          </a>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
            Iniciar Sesión
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Regístrate aquí
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
