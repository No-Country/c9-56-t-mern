import { useForm } from "react-hook-form";
import { useState } from "react";
import React from "react";

const RegisterFormStep1 = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const updateStep = (step) => {
    setCurrentStep(step);
  }
    const { register, formState: { errors }, handleSubmit } = useForm({
      
    });

    const onSubmit = (data) => {
        <div>Data{data}</div>
        console.log(data);
    }



    return <div className="flex flex-col items-center p-4 ">
        <form  className="max-w-sm mt-5 mx-auto p-6 rounded-lg flex flex-col items-center"onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="block font-medium mb-2">Email</label>
                <input type="email" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <div>
                <label className="block font-medium mb-2">Contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />

            <div>
                <label className="block font-medium mb-2">Repetir contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />
      
        </form>
    </div>
}

export default RegisterFormStep1;
