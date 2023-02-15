import { useForm } from "react-hook-form";
import React from "react";

const RegisterFormStep2 = () => {

    const { register, formState: { errors }, handleSubmit } = useForm({

    });

    const onSubmit = (data) => {
        <div>Data{data}</div>
        console.log(data);
    }

    return <div className="flex flex-col items-center p-4 ">
        <form className="max-w-sm mt-5 mx-auto p-6 rounded-lg flex flex-col items-center"onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input 
                className="border border-gray-400 p-2 w-full"
                type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <br />

            <div>
                <label>Contraseña</label>
                <input 
                className="border border-gray-400 p-2 w-full"
                type="password" {...register('password', {
                })} />
                {errors.password && <p>{errors.password.message}</p>}

            </div>

            <br />
            <br />

            <div>
                <label>Repetir contraseña</label>
                <input
                    className="border border-gray-400 p-2 w-full"
                    type="password"
                    name="confirmPassword"
                    
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <br />
            <button 
         className="bg-black text-white py-3 px-6 rounded-lg sm:py-4 sm:px-8 sm:rounded-xl">

        Guardar Datos
      </button>

        </form>
    </div>
}

export default RegisterFormStep2;
