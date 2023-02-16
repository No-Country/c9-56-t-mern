import { useForm } from "react-hook-form";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

const RegisterFormStep1 = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: props.formValues
    });

    const onSubmit = (data) => {
        <div>Data{data}</div>
        props.setFormValues({ ...props.formValues, ...data })
        props.updateStep(props.currentStep + 1)
        console.log(data);

    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <br />
            <br />
            <br />
            <button type="submit" className="mt-4 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" > Continuar</button>
        </form>
    </div>
}

export default RegisterFormStep1;
