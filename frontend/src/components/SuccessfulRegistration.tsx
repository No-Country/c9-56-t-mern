import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const SuccessfulRegistration: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 text-center">
      <FiCheckCircle className=" text-5xl text-green-600 m-auto" />
        <h1 className="text-2xl font-medium my-4">Registro exitoso</h1>
        <p className="text-gray-600">Gracias por registrarte en nuestra plataforma.</p>
        <button className="bg-green-600 text-white py-2 px-4 rounded-full mt-4 hover:bg-green-700">Completar perfil</button>
        <p className="text-center mt-4 text-gray-600">
          ¿Quieres hacerlo en otro momento? <a href="#">Haz clic aquí</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessfulRegistration;
