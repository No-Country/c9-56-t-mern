import { useForm } from "react-hook-form";
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from 'react-router-dom'

const RegisterFormStep2 = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: props.formValues
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        <div>Data{data}</div>
        props.setFormValues({ ...props.formValues, ...data })
        navigate('/succes')
        console.log(data);
    }
    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register('avatar', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>

            <br />
            <br />

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('role', {
                })} />
                {errors.password && <p>{errors.password.message}</p>}

            </div>

            <br />
            <br />

            <div>
                <label>Repetir contraseña</label>
                <input
                    type="password"
                    name="confirmPassword"
                // ref={register({
                //     required: 'Confirm password is required',
                //     validate: value => {
                //         return value === watch('password') || 'La contraseña no es igual';
                //     }
                // })}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <br />
            <br />
            <br />
            <br />
            <button type="submit" >Guardar datos</button>
        </form>
    </div>
}

export default RegisterFormStep2;