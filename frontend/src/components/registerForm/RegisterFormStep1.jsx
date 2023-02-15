import { useForm } from "react-hook-form";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

const RegisterFormStep1 = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: props.formValues
    });

    const onSubmit = (data) => {
        <div>Data{data}</div>
        props.setFormValues({ ...props.formValues, ...data })
        console.log(data);

    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <br />

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />
            <br />

            <div>
                <label>Repetir contraseña</label>
                <input type="password" {...register('password', {
                })} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <button type="submit" > Continuar</button>
        </form>
    </div>
}

export default RegisterFormStep1;